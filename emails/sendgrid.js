require("dotenv").config();

// eslint-disable-next-line no-unused-vars
let sendEmail = function(toEmail, name, callback) {
  let sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: toEmail,
    from: "notifications@subman.com",
    templateId: "d-56fb8f9974d543e1b32eec206cab4dc5",
    // eslint-disable-next-line camelcase
    dynamic_template_data: {
      firstName: name
    }
  };

  sgMail.send(msg).then(function(res) {
    console.log(res[0].statusMessage);
  });
};
module.exports = sendEmail;
