import React from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

function Header({ contacts, theme, setTheme }) {
  return (
    <header className="header">
      <div className="identity">
        <h1 className="name">Jeetansh Arora</h1>
        <p className="tagline">osoc'25 contributor | mern dev</p>
        <ul className="item-list contact-row header-contact-row">
          {contacts.map((contact) => (
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
  )
}

export default Header
