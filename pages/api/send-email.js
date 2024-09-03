import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    // Set up the email data
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Contact Us Form Submission from ${name}`,
      text: message,
      html: `<p>You have a new contact us form submission</p>
             <h3>Contact Details</h3>
             <ul>
               <li>Name: ${name}</li>
               <li>Email: ${email}</li>
             </ul>
             <h3>Message</h3>
             <p>${message}</p>`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Your message has been received, We will contact you soon.' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Only POST requests are allowed' });
  }
}
