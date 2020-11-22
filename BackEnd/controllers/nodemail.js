const nodemailRouter = require("express").Router();
const nodemailer = require('nodemailer')
require('dotenv').config()

const transport = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('NodeMail Server is running');
    }
});

nodemailRouter.post('/', (req, res, next) => {
    
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \nemail: ${email} \nmessage: ${message} `

    const mail = {
        from: email,
        to: 'niklas.menard.us@gmail.com',
        subject: `New Contact from ${email}`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = nodemailRouter;