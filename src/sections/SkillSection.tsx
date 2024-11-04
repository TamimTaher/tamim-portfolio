import BlurFade from '@/components/magicui/blur-fade'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const SkillSection = () => {
  return (
    <section id="skills" className='pt-10'>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm">
                  <AnimatedGradientText>
                   🛠️ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Skills
                    </span>
                  </AnimatedGradientText>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Jack of all trades
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve tried many frameworks and libraries. Here are some of my most used ones.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SkillSection