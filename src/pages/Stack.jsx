import { Code2 } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StackCard } from "../components/StackCard";
import { stacks } from "../data/portfolioData";

export function Stack() {
  return (
    <>
      <PageHeader
        eyebrow="Tech stack"
        title="Tools I keep within reach."
        copy="Languages, frameworks, databases, and platforms I use day to day to design, build, and ship full-stack products."
        icon={Code2}
      />
      <section className="page-shell grid gap-5 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {stacks.map((stack, index) => (
          <StackCard key={stack.title} stack={stack} index={index} />
        ))}
      </section>
    </>
  );
}
