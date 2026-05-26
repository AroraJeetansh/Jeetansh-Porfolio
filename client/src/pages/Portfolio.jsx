import React from 'react'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'

function Portfolio({ data }) {
  return (
    <main className="main">
      <section className="column panel">
        <AboutSection about={data.about} />
        <SkillsSection skills={data.skills} />
      </section>

      <ExperienceSection experiences={data.experiences} />
    </main>
  )
}

export default Portfolio
