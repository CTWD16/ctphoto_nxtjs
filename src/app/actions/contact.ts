'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  eventType: z.string().optional(),
  date: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      eventType: formData.get('eventType') as string,
      date: formData.get('date') as string,
      message: formData.get('message') as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // Send email to photographer
    const { data: photographerEmail, error: photographerError } = await resend.emails.send({
      from: 'Charlie Trotter Photography <contact@charlietrotterphoto.com>',
      to: 'info@charlietrotterphoto.com',
      subject: `New WebsiteContact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Event Type:</strong> ${validatedData.eventType || 'Not specified'}</p>
        <p><strong>Event Date:</strong> ${validatedData.date || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${validatedData.message}</p>
      `,
    })

    if (photographerError) {
      console.error('Error sending email to photographer:', photographerError)
      return { success: false, error: 'Failed to send email' }
    }

    // Send confirmation email to submitter
    const { data: confirmationEmail, error: confirmationError } = await resend.emails.send({
      from: 'Charlie Trotter Photography <contact@charlietrotterphoto.com>',
      to: validatedData.email,
      subject: 'Thank you for contacting Charlie Trotter Photography',
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>Thank you for your interest in Charlie Trotter Photography. I have received your message and will get back to you within 24 hours.</p>
        <p>Here's a copy of your message:</p>
        <p><em>${validatedData.message}</em></p>
        <p>Best regards,<br>Charlie Trotter</p>
        <p><strong>Contact:</strong> (757) 375-9901<br><strong>Email:</strong> info@charlietrotterphoto.com</p>
      `,
    })

    if (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError)
      // Don't fail the whole operation if confirmation email fails
    }

    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
