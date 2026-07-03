import { Layers3 } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolioData'

export function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Selected projects"
        title="Case notes from the messy desk."
        copy="A compact gallery for the work that deserves a closer look. Replace these placeholders with shipped products, class projects, freelance work, or experiments."
        icon={Layers3}
      />
      <section className="page-shell grid gap-6 pb-16 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </>
  )
}
