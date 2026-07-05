import { ArrowRight, Code2, Mail, Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import heroImg from '../assets/images/boni_cleaned.webp'
// import heroImg2 from '../assets/images/jongkok-di-atap.jpg'
import { Tape } from '../components/Tape'
import { HelloMyNameIs } from '../components/HelloMyNameIs'

const metrics = [
  ['Projects', '12+', 'Case studies, prototypes, and shipped web features.'],
  ['Experience', '3 lanes', 'Work, organisations, and volunteering in one tidy timeline.'],
  ['Approach', '1 rule', 'Make it useful first, then make it memorable.'],
]

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function pickHeroImage(value){
//   let heroImage;
//   if(value==0){
//     heroImage = heroImg;
//   } else if (value ==1){
//     heroImage = heroImg2;
//   } else {
//     heroImage = heroImg;
//   }
//   return heroImage;
// }

export function Home() {
  return (
    <>
      <section className="page-shell grid min-h-[calc(100svh-88px)] items-center gap-8 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:py-16">
        <div className="relative" data-reveal>
          <div className="availability-tag font-bold flex flex-col">
            <div className='flex flex-row gap-2'>
              <Sparkles size={15} />
              <span>Available for any kind of work</span>
            </div>
            <span className="availability-note font-normal w-full">
              (As long as it's legal)
            </span>
          </div>
          <h1 className="font-heading hero-title text-6xl leading-[0.92] sm:text-7xl lg:text-8xl">
            Hello, I'm Martin and I build stuff.
          </h1>
          <p className="body-copy mt-7 max-w-2xl text-lg leading-7">
            I am a full-stack developer who enjoys turning messy ideas into clean products, expressive interfaces, and reliable systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/projects"
              className="paper-button paper-button-primary"
            >
              Check out my projects <ArrowRight size={18} />
            </NavLink>
            <NavLink to="/contact" className="paper-button">
              Hit me up! <Mail size={18} />
            </NavLink>
          </div>
        </div>

        <div className="hero-collage mx-auto w-full max-w-xl" data-reveal>
          <div className="portrait-card">
            <Tape className="left-1/2 top-[-18px] -translate-x-1/2 rotate-[-2deg]" />
            <HelloMyNameIs className="absolute -bottom-5 -inset-e-10 -rotate-12" />
            {/* <img
              src={pickHeroImage(getRandomInt(1,2))}
              alt="Placeholder portrait sketch"
              className="h-full mx-auto w-full object-cover object-[0%_35%] sm:h-64 sm:w-64 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"
            /> */}
            <img
              src={heroImg}
              alt="Placeholder portrait sketch"
              className="h-full mx-auto w-full object-cover object-[0%_35%] sm:h-64 sm:w-64 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"
            />
            {/* <div className="portrait-caption">portrait-placeholder.png</div> */}
          </div>
          <div className="sticky-note sticky-note-top p-3">
            <span className="font-heading text-2xl md:text-3xl">Currently</span>
            <p className="leading-5">Learning, learning, and learning</p>
          </div>
          <div className="mini-ticket">
            <Code2 size={18} />
            Design / Develop / Manage
          </div>
        </div>
      </section>

      <section className="page-shell py-10 hidden">
        <div className="grid gap-5 md:grid-cols-3">
          {metrics.map(([label, number, copy], index) => (
            <div
              key={label}
              className={`metric-card rotate-${index}`}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="section-kicker">{label}</span>
              <strong className="font-heading mt-2 block text-5xl">
                {number}
              </strong>
              <p className="body-copy mt-3 text-sm leading-6">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
