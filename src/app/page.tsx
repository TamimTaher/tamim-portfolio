import AboutSection from "@/sections/AboutSection"
import ContactSection from "@/sections/ContactSection"
import EducationSection from "@/sections/EducationSection"
import EventSection from "@/sections/EventSection"
import ExperienceSection from "@/sections/ExperienceSection"
import { HeroSection } from "@/sections/HeroSection"
import ProjectSection from "@/sections/ProjectSection"
import SkillSection from "@/sections/SkillSection"

export default function Page() {
  return (
    <>
    <div className="w-full h-screen">
      <HeroSection />
    </div>
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-lg mx-auto px-4">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillSection />
      <ProjectSection />
      <EventSection />
      <ContactSection />
    </main>
    </>
  )
}
