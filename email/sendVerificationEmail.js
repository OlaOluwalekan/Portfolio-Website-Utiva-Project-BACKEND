import sendEmail from './sendEmail.js'
import { verificationTemplate } from './templates/verificationTemplate.js'

const sendVerificationEmail = (receiver, code) => {
  sendEmail(receiver, 'Verify Your Email', verificationTemplate(code))
}

export default sendVerificationEmail
