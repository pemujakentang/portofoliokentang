export function TimelineItem({ item, index, images }) {
  const image = images[`../assets/experiences/${item.image}`];
  if(index%2==0){
    return (
      <article
        className="timeline-item-inverted"
        data-reveal
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="scrap-panel p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="section-kicker font-bold">{item.type}</span>
            <span className="place-pill font-semibold">{item.place}</span>
          </div>
          <h2 className="font-heading mt-3 text-3xl">{item.role}</h2>
          <p className="body-copy mt-3 text-sm leading-6">{item.copy}</p>
        </div>
        <div className="timeline-pin leading-4.5">
          {item.start} <br /> - <br /> {item.end}
        </div>
        <div>
          <img
            src={image}
            alt={item.role}
            className={`timeline-image w-full h-48 object-cover ${item.object_position}`}
          />
        </div>
      </article>
    );
  }
  return (
    <article
      className="timeline-item"
      data-reveal
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <img src={image} alt={item.role} className={`timeline-image w-full h-48 object-cover ${item.object_position}`} />
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
        <p className="body-copy mt-3 text-sm leading-6">{item.copy}</p>
      </div>
    </article>
  );
}
