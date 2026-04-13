import './App.css'
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  const data = {
    about: 'I build with web dev, turning quick ideas into late-night debugging sessions. Currently exploring LLMs, ML, and cloud. Off-screen, I’m either listening to music or playing football or table tennis, where mistakes are easier to fix than bugs.',
    skills: [
      { title: 'MongoDB', icon: <SiMongodb /> },
      { title: 'Express', icon: <SiExpress /> },
      { title: 'React', icon: <SiReact /> },
      { title: 'Node.js', icon: <SiNodedotjs /> },
      { title: 'Git', icon: <SiGit /> },
      { title: 'C++', icon: <SiCplusplus /> },
      { title: 'JavaScript', icon: <SiJavascript /> },
      { title: 'Python', icon: <SiPython /> },
    ],
    experiences: [
      {
        title: 'developer - eduspheretechnologies',
        date: 'july 2025 – october 2025',
        details: [
          'built core frontend components.',
          'integrated backend REST APIs for CRUD functionality.',
        ],
      },
      {
        title: "osoc'25 open source contributor - OPEN Community",
        date: 'july 2025 – july 2025',
        details: [
          "designed and integrated a new logo to refresh the project's visual identity.",
          'improved UI by aligning auth cards and maintaining consistent styling.',
          'modified Prisma schema to enable environment-specific database configs.',
        ],
      },
    ],
    contacts: [
      {
        title: 'LinkedIn',
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/jeetansh-a-150863321/',
      },
      {
        title: 'GitHub',
        icon: <FaGithub />,
        url: 'https://github.com/AroraJeetansh',
      },
      {
        title: 'Email',
        icon: <FaEnvelope />,
        url: 'mailto:jeetansharora06@gmail.com',
      },
      {
        title: 'Resume',
        icon: <FaFileAlt />,
        url: '/Jeetansh_Arora_Resume.pdf',
      },
    ],
  }

  return (
    <div className={`page ${theme === 'dark' ? 'dark' : 'light'}`}>
      <header className="header">
        <div className="identity">
          <h1 className="name">Jeetansh Arora</h1>
          <p className="tagline">osoc'25 contributor | mern dev</p>
          <ul className="item-list contact-row header-contact-row">
            {data.contacts.map((contact) => (
              <li key={contact.title} className="item-row">
                <a
                  className="contact-icon-link"
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={contact.title}
                  title={contact.title}
                >
                  {contact.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
        </button>
      </header>

      <main className="main">
        <section className="column panel">
          <div className="column-header">
            <h2>About</h2>
          </div>
          <p className="about-text">{data.about}</p>

          <div className="column-header">
            <h2>Skills</h2>
          </div>
          <ul className="item-list skills-row">
            {data.skills.map((skill) => (
              <li key={skill.title} className="item-row">
                <span className="skill-chip" title={skill.title}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.title}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="column panel">
          <div className="column-header">
            <h2>Experiences</h2>
          </div>
          <ul className="item-list">
            {data.experiences.map((exp) => (
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
      </main>

      <footer className="footer">
        <span>Gurugram, Haryana, India</span>
        <span>Last updated: April 13, 2026</span>
        <span>@2026 Jeetansh Arora</span>
      </footer>
    </div>
  )
}

export default App
