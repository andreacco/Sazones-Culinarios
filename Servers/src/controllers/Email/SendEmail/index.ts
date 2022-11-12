import nodemailer from 'nodemailer'
import config from '../../../config/ConfigEntorno/Config'

const sendEmail = async(email: string, subject: string, html: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: config.email,
                pass: config.password
            }
        })
        const mailOptions = {
            from: config.email,
            to: email,
            subject,
            html: html
        }
        const mailSent = await transporter.sendMail(mailOptions)
        return mailSent
    }
    catch (error) {
        console.log('Hubo un error al enviar este mensaje!', error)
    }
}

export default sendEmail