import React from 'react'
import styles from '../page.module.css'

export default function About({ activeSection }) {
  return (
    <div className=" py-16 pt-0">
      <div className="container mx-auto max-w-6xl px-8">
        <section 
          className={`
            ${styles.section} 
            ${styles.about} 
            ${activeSection === 'about' ? styles.active : ''}
          `}
        >
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">About SDB IT</h2>
          
          <p className="text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            <strong>SDB IT</strong> is a leading software development company specializing in creating innovative, scalable solutions for businesses. Our team of experts is dedicated to transforming your ideas into cutting-edge digital products that drive growth and success.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700">
                Our mission is to empower businesses with tailor-made software solutions that enhance efficiency, streamline operations, and create lasting impact. We aim to provide businesses with the tools they need to stay ahead in a constantly evolving digital landscape.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h3>
              <ul className="space-y-4">
                {[
                  "Custom Software Development",
                  "Enterprise Solutions",
                  "Consulting & Strategy",
                  "UI/UX Design",
                  "Support & Maintenance"
                ].map((service, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700">
                At SDB IT, we envision a world where technology unlocks new opportunities for businesses of all sizes. We strive to be at the forefront of technological innovation, helping our clients navigate and thrive in the digital era.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our team consists of talented developers, designers, project managers, and consultants who bring years of experience and passion for technology.
              </p>
              <p className="text-lg text-gray-700">
                We believe in continuous learning and growth, ensuring our team stays ahead of industry trends and innovations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}