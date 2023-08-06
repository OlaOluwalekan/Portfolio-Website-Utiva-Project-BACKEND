import nodemailer from 'nodemailer'

const sendEmail = (receiver, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: 'app4bells@gmail.com',
      pass: 'dktujwvuwvpfldrq',
    },
  })

  const emailOptions = {
    from: 'app4bells@gmail.com',
    to: receiver,
    subject,
    html: message,
  }

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log('email sent successfully')
    }
  })
}

export default sendEmail
