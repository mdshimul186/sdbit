'use client'

import { useRef } from 'react'
import { Montserrat } from 'next/font/google'
import styles from './page.module.css'
import TypingAnimation from './components/TypingAnimation'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm.jsx'
import { MapPin, Mail, Phone } from 'lucide-react'
import About from './components/About.jsx'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={`${styles.main} ${montserrat.className}`}>
      <Navigation 
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <section id="home" ref={homeRef} className={`${styles.section} ${styles.home}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>SDB IT</h1>
          <p className={styles.subtitle}>Software Driven Business</p>
          <TypingAnimation />
        </div>
        <div className={styles.address}>
          <MapPin className={styles.icon} />
          <p>
          House- 4, 4th floor,  Rabindra Sarani, Sector- 7<br />
          Uttara, Dhaka, Bangladesh 1230
          </p>
        </div>
      </section>
      <section id="about" ref={aboutRef} className={`${styles.section} ${styles.about}`}>
        <div className={styles.content}>
         <About />
        </div>
       
      </section>
      <section id="contact" ref={contactRef} className={`${styles.section} ${styles.contact}`}>
        <div className={styles.content}>
          
          <ContactForm />
        </div>
       
      </section>
    </main>
  )
}

