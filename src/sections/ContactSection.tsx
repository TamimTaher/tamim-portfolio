import BlurFade from '@/components/magicui/blur-fade'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const ContactSection = () => {
  return (
    <section id="contact" className='pb-10'>
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-10">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
            <div className="inline-block px-3 py-1 text-sm">
                  <AnimatedGradientText>
                    💬 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Contact
                    </span>
                  </AnimatedGradientText>
                </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href="https://www.facebook.com/tamim.taher.3786/"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on Facebook
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
  )
}

export default ContactSection