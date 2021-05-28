// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  api: {
    externalResolver: true,
  },
}

export default function (req, res) {
  
  require('dotenv').config();
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'contact.tuiify@gmail.com',
      pass: process.env.password
    },
    secure: true
  });

  console.log(req.body);

  const mailData = {
    from: 'contact.tuiify@gmail.com',
    to: 'franckpoingt@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sender:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  console.log(req.body)
  res.send('success')
}
