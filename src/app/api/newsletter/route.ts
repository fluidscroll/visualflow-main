import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, interests } = await req.json()

    // Email to you
    await resend.emails.send({
      from: 'Visual Flow Website <info@visualflow.studio>',
      to: 'info@visualflow.studio',
      subject: 'New Mailing List Signup',
      html: `
        <h2>New newsletter signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong> ${interests || 'None selected'}</p>
      `,
    })

    // Confirmation email to the user
    await resend.emails.send({
      from: 'Visual Flow <info@visualflow.studio>',
      to: email,
      subject: 'You’re on the VisualFlow mailing list',
      html: `
        <h2>Thanks for signing up!</h2>
        <p>We’ve added you to the Visual Flow mailing list.</p>
        <p><strong>Your interests:</strong> ${interests || 'None selected'}</p>
        <p>— The Visual Flow team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    )
  }
}
