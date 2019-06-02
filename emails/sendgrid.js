require("dotenv").config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'electronbattle@gmail.com',
  from: 'notifications@subman.com',
  templateId: 'd-56fb8f9974d543e1b32eec206cab4dc5',
  dynamic_template_data: {
    firstName: 'Reggie',

  },
};

sgMail.send(msg)
.then(function (res) {
  console.log(res[0].statusMessage);
});
module.exports = sgMail;
