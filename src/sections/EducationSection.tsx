import BlurFade from '@/components/magicui/blur-fade'
import { ResumeCard } from '@/components/resume-card'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const EducationSection = () => {
  return (
    <section id="education" className="pt-10">
        <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-4">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm">
                  <AnimatedGradientText>
                  💼 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Education
                    </span>
                  </AnimatedGradientText>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My academic journey
                </h2>
              </div>
            </div>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  )
}

export default EducationSection