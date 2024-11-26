import styles from '../page.module.css'



export default function Contact({ activeSection }) {
  return (
    <section className={`${styles.section} ${styles.contact} ${activeSection === 'contact' ? styles.active : ''}`}>
      <h2>Contact Us</h2>
      <p>Get in touch with us to discuss how we can help your business thrive in the digital world.</p>
      <p>Email: info@sdbit.com</p>
      <p>Phone: (123) 456-7890</p>
    </section>
  )
}

