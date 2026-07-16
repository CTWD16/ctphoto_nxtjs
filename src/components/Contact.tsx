'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Facebook } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formDataObj = new FormData()
    formDataObj.append('name', formData.name)
    formDataObj.append('email', formData.email)
    formDataObj.append('phone', formData.phone)
    formDataObj.append('eventType', formData.eventType)
    formDataObj.append('date', formData.date)
    formDataObj.append('message', formData.message)

    const result = await sendContactEmail(formDataObj)

    setIsSubmitting(false)

    if (result.success) {
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: ''
      })
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      setError(result.error || 'Failed to send message. Please try again.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@charlietrotterphoto.com',
      href: 'mailto:info@charlietrotterphoto.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(757) 375-9901',
      href: 'tel:7573759901'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Based in Chesapeake, VA',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs and create 
            something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="wedding">Wedding</option>
                      <option value="portrait">Portrait</option>
                      <option value="event">Event</option>
                      <option value="commercial">Commercial</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell me about your photography needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-gray-600 hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.label}</div>
                      <div>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Response Time</h4>
              <p className="text-gray-600 mb-4">
                I typically respond to inquiries within 24 hours. For urgent matters, 
                please call me directly at the number above.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Business Hours:</strong></p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h4>
              <p className="text-gray-600 mb-4">
                Follow my work on social media for the latest projects and behind-the-scenes content.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/charlietrotterphoto/" className="text-primary-500 hover:text-primary-600 flex items-center space-x-2">
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a href="https://www.facebook.com/CharlieTrotterPhotography/" className="text-primary-500 hover:text-primary-600 flex items-center space-x-2">
                  <Facebook className="w-5 h-5" />
                  <span className="font-medium">Facebook</span>
                </a>
                {/* <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
                  LinkedIn
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
