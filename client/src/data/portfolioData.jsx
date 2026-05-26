import React from 'react'
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
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

export const portfolioData = {
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
