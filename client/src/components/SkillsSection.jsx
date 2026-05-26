import React from 'react'

function SkillsSection({ skills }) {
  return (
    <>
      <div className="column-header">
        <h2>Skills</h2>
      </div>
      <ul className="item-list skills-row">
        {skills.map((skill) => (
          <li key={skill.title} className="item-row">
            <span className="skill-chip" title={skill.title}>
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.title}</span>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SkillsSection
