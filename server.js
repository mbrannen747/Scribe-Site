const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
"use strict";
const nodemailer = require("nodemailer");

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.post('/mail', async (req,res) => {
    try {
      var data = req.body;
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.ENV_GMAIL_USER,
          pass: process.env.ENV_GMAIL_PASS
        }
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"${data.name}" <${data.email}>`, // sender address
        // to: process.env.ENV_GMAIL_USER, // list of receivers
        to: process.env.ENV_GMAIL_USER,
        subject: "Scribe Sciences Website Contact", // Subject line
        html: `<b>The Following message has been sent from ScribeLogger.com: </b><p>${data.message}</p>` // html body
      });
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
      transporter.close();
      res.send({"message":"sent"})
    } catch(ex){
      console.log(ex);
      res.send({"message":"failed"})
    }
  });
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})


