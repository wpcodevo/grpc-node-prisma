import nodemailer from 'nodemailer';
import { User } from '@prisma/client';
import pug from 'pug';
import { convert } from 'html-to-text';
import customConfig from '../config/default';

const smtp = customConfig.smtp;

export default class Email {
  firstName: string;
  to: string;
  from: string;
  constructor(public user: User, public url: string) {
    this.firstName = user.name.split(' ')[0];
    this.to = user.email;
    this.from = `Codevo ${customConfig.emailFrom}`;
  }

  private newTransport() {
    // if (process.env.NODE_ENV === 'production') {
    //   console.log('Hello')
    // }

    return nodemailer.createTransport({
      ...smtp,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });
  }

  private async send(template: string, subject: string) {
    // Generate HTML template based on the template string
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      firstName: this.firstName,
      subject,
      url: this.url,
    });
    // Create mailOptions
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: convert(html),
      html,
    };

    // Send email
    const info = await this.newTransport().sendMail(mailOptions);
    console.log(nodemailer.getTestMessageUrl(info));
  }

  async sendVerificationCode() {
    await this.send('verificationCode', 'Your account verification code');
  }

  async sendPasswordResetToken() {
    await this.send(
      'resetPassword',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
}
