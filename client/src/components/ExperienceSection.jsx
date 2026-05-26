import React from 'react'

function ExperienceSection({ experiences }) {
  return (
    <section className="column panel">
      <div className="column-header">
        <h2>Experiences</h2>
      </div>
      <ul className="item-list">
        {experiences.map((exp) => (
          <li key={exp.title} className="item-row">
            <div>
              <div className="experience-header">
                <span className="item-title">{exp.title}</span>
                <span className="item-date">{exp.date}</span>
              </div>

              {exp.details?.length ? (
                <ul className="detail-list">
                  {exp.details.map((detail) => (
                    <li key={detail} className="detail-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
