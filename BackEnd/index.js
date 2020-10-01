require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.static('build'))
app.use(cors())

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
        console.log('Server is running');
    }
});

app.post('/send', (req, res, next) => {
    
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


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})