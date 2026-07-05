import { BriefcaseBusiness } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { TimelineItem } from '../components/TimelineItem'
import { timeline } from '../data/portfolioData'
import { TimelineItemMobile } from '../components/TimelineItemMobile';

const images = import.meta.glob(
  "../assets/experiences/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
);

export function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience log"
        title="Bits and bytes of my journey (so far)."
        copy='A summary of my not-so-but-somewhat "rich" and "diverse" work, organisation, as well as volunteering experiences.'
        icon={BriefcaseBusiness}
      />
      <section className="page-shell pb-16">
        <div className="hidden md:block">
          <div className="timeline-list">
            {timeline.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${item.role}`}
                item={item}
                index={index}
                images={images}
              />
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <div className="timeline-list block md:hidden">
            {timeline.map((item, index) => (
              <TimelineItemMobile
                key={`${item.year}-${item.role}`}
                item={item}
                index={index}
                images={images}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
