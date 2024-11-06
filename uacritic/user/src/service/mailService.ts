import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface MailLinkProps {
    to: string;
    link: string;
}

export default class MailService {
    transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        } as SMTPTransport.Options);
    }

    async sendActivationLink({to, link}: MailLinkProps) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation Link ' + process.env.API_URL,
            text: '',
            html:
                `
                <div>
                    <h1>For activation yout account user this link</h1>
                    <a href='${link}'>${link}</a>
                </div>
            `
        });
    }
}
