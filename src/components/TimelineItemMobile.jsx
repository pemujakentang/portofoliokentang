export function TimelineItemMobile({ item, index, images }) {
  const image = images[`../assets/experiences/${item.image}`];
  return (
    <article
      className="timeline-item"
      data-reveal
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <img src={image} alt={item.role} className={`timeline-image w-full h-40 object-cover ${item.object_position}`} />
      </div>
      <div className="timeline-pin leading-4.5">
        {item.start} <br /> - <br /> {item.end}
      </div>
      <div className="scrap-panel p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="section-kicker font-bold">{item.type}</span>
          <span className="place-pill font-semibold">{item.place}</span>
        </div>
        <h2 className="font-heading mt-3 text-3xl">{item.role}</h2>
        <p className="body-copy mt-1 text-sm leading-5">{item.copy}</p>
      </div>
    </article>
  );
}
