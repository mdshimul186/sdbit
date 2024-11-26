import { useState, useEffect } from 'react'
import styles from '../page.module.css'

export default function Navigation({ onHomeClick, onAboutClick, onContactClick }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`${styles.navigation} ${styles[activeSection]}`}>
      <ul>
        <li>
          <button onClick={onHomeClick}>Home</button>
        </li>
        <li>
          <button onClick={onAboutClick}>About Us</button>
        </li>
        <li>
          <button onClick={onContactClick}>Contact Us</button>
        </li>
      </ul>
    </nav>
  )
}

