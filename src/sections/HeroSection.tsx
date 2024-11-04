'use client'

import grainImage from '@/assets/images/grain.webp'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit'
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DATA } from "@/data/resume"
import { FlipWords } from "@/components/ui/flip-words"
import { RainbowButton } from '@/components/ui/rainbow-button'
import { motion } from 'framer-motion'

export const HeroSection = () => {
    return (
        <div className='flex items-center justify-center w-full h-full relative z-0 overflow-x-clip'>
            <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
            <div className='absolute inset-0 -z-30 opacity-5' style={{
                backgroundImage: `url(${grainImage.src})`
                }}></div>
                <div className='size-[620px] hero-ring'></div>
                <div className='size-[820px] hero-ring'></div>
                <div className='size-[1020px] hero-ring'></div>
                <div className='size-[1220px] hero-ring'></div>
                
                <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
                <StarIcon className='size-28 text-gray-300' />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
                <StarIcon className='size-12 text-gray-300' />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
                <StarIcon className='size-8 text-gray-300' />
                </HeroOrbit>

                <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
                <SparkleIcon className='size-8 text-gray-300/20' />
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
                <SparkleIcon className='size-5 text-gray-300/20' />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
                <SparkleIcon className='size-10 text-gray-300/20' />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
                <SparkleIcon className='size-14 text-gray-300/20' />
                </HeroOrbit>


                <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
                <div className='size-3 rounded-full bg-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
                <div className='size-2 rounded-full bg-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
                <div className='size-2 rounded-full bg-emerald-300/20' />
                </HeroOrbit>               
            </div>

            <section id="hero">
              <div className="mx-auto w-full max-w-2xl space-y-8 pt-14 md:pt-20">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <div className="pb-4 md:pt-10">
                    <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Avatar className="size-28 border shadow-lg ring-4 ring-black ring-opacity-80 dark:ring-white dark:ring-opacity-80">
                        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} loading="eager" />
                        <AvatarFallback>{DATA.initials}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    </div>
                    <div className="flex-col flex flex-1 space-y-1.5 items-center">
                    <div className="flex flex-row items-center md:gap-1 lg:gap-1">
                      <BlurFadeText
                      className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                      yOffset={0}
                      text={`Hi, I'm`}
                      />
                      <FlipWords words={["Abu", "Taher", "Tamim"]} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mx-0" />
                      <BlurFadeText 
                      className="flex text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none -mx-3"
                      yOffset={0}
                      text="👋" />
                    </div>
                    <BlurFadeText
                    className="w-full max-w-md md:max-w-lg lg:max-w-xl text-center my-2 px-4"
                    text={DATA.description}
                    />
                  </div>
                  <div className='pb-32 pt-2'>
                  <a href="mailto:abutahertamim02@gmail.com" target="_blank" rel="noopener noreferrer">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <RainbowButton>Let's Connect</RainbowButton>
                    </motion.div>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  };