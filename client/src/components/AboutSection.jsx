import React from 'react'

function AboutSection({ about }) {
  return (
    <>
      <div className="column-header">
        <h2>About</h2>
      </div>
      <p className="about-text">{about}</p>
    </>
  )
}

export default AboutSection
