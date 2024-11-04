import { HackathonCard } from '@/components/hackathon-card'
import BlurFade from '@/components/magicui/blur-fade'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const EventSection = () => {
  return (
    <section id="events">
        <div className="space-y-12 w-full py-10">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <div className="inline-block px-3 py-1 text-sm">
                  <AnimatedGradientText>
                    🤝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Volunteering
                    </span>
                  </AnimatedGradientText>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like to organize events
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, college, and school, I attended 50+ events. People from around the
                  country would come together and organize incredible events in 2-3
                  days. It was a great experience.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.events.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
  )
}

export default EventSection