// const nodemailRouter = require('express').Router();
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const transport = {
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// };

// const transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else if (success) {
//     console.log('NodeMail Server is running');
//   }
// });

// nodemailRouter.post('/', (req, res) => {
//   const { name } = req.body;
//   const { email } = req.body;
//   const { message } = req.body;
//   const content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

//   const mail = {
//     from: email,
//     to: 'niklas.menard.us@gmail.com',
//     subject: `New Contact from ${email}`,
//     text: content,
//   };

//   transporter.sendMail(mail, (err) => {
//     if (err) {
//       res.json({
//         status: 'fail',
//       });
//     } else {
//       res.json({
//         status: 'success',
//       });
//     }
//   });
// });

// module.exports = nodemailRouter;
