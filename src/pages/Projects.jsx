import { Layers3 } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolioData'

const images = import.meta.glob(
  "../assets/projects/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
);

export function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Project Highlights"
        title="What I've worked on before."
        copy="A compact gallery for the work that deserves a closer look, including research, student, organizational, and personal tech projects."
        icon={Layers3}
      />
      <section className="page-shell grid gap-6 pb-16 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} images={images} />
        ))}
      </section>
    </>
  )
}
