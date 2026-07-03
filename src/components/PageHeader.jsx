import { PenLine } from 'lucide-react'
import { Tape } from './Tape'

export function PageHeader({ eyebrow, title, copy, icon: Icon = PenLine }) {
  return (
    <section className="page-shell pb-8 pt-12 sm:pt-16">
      <div className="scrap-panel relative p-6 sm:p-8 lg:p-10" data-reveal>
        <Tape className="-left-4 top-5 rotate-[-13deg]" />
        <div className="eyebrow-badge">
          <Icon size={16} />
          {eyebrow}
        </div>
        <h1 className="font-heading text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="body-copy mt-5 text-base leading-7 sm:text-lg">{copy}</p>
      </div>
    </section>
  )
}
