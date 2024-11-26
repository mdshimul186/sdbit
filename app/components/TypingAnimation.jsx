'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../page.module.css'

const sentences = [
  "Empowering Businesses with Software-Based Solutions",
  "Transforming Ideas into Scalable, Cutting-Edge Digital Products"
]

export default function TypingAnimation() {
  const [text, setText] = useState('')
  const sentenceIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)

  useEffect(() => {
    function typeWriter() {
      const currentSentence = sentences[sentenceIndexRef.current]

      if (isDeletingRef.current) {
        setText(current => current.substring(0, current.length - 1))
        charIndexRef.current--
      } else {
        setText(current => currentSentence.substring(0, current.length + 1))
        charIndexRef.current++
      }

      if (!isDeletingRef.current && charIndexRef.current === currentSentence.length) {
        isDeletingRef.current = true
        setTimeout(typeWriter, 1500) // Pause at the end of the sentence
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false
        sentenceIndexRef.current = (sentenceIndexRef.current + 1) % sentences.length
        setTimeout(typeWriter, 500) // Pause before starting the next sentence
      } else {
        setTimeout(typeWriter, isDeletingRef.current ? 25 : 50) // Faster when deleting
      }
    }

    typeWriter()
  }, [])

  return <h2 className={styles.typingText}>{text}</h2>
}

