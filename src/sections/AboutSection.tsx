import BlurFade from '@/components/magicui/blur-fade'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import React from 'react'
import Markdown from 'react-markdown'

const BLUR_FADE_DELAY = 0.04;
const AboutSection = () => {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-4">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm">
                  <AnimatedGradientText>
                  😁 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      About Me
                    </span>
                  </AnimatedGradientText>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Introduction is everything
                </h2>
              </div>
            </div>
          </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-center">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
  )
}

export default AboutSection