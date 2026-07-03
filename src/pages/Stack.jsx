import { Code2 } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { StackCard } from '../components/StackCard'
import { stacks } from '../data/portfolioData'

export function Stack() {
  return (
    <>
      <PageHeader
        eyebrow="Tech stack"
        title="Tools I keep within reach."
        copy="A placeholder map for the technologies, workflows, and habits you can confidently talk about during interviews."
        icon={Code2}
      />
      <section className="page-shell grid gap-5 pb-16 md:grid-cols-2">
        {stacks.map((stack, index) => (
          <StackCard key={stack.title} stack={stack} index={index} />
        ))}
      </section>
    </>
  )
}
