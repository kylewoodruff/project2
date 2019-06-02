exports.JAWSBD = {
  url: process.env.JAWS_URL,
  username: process.env.JAWS_USERNAME,
  password: process.env.JAWS_PASSWORD,
  database: process.env.JAWS_DATABASE,
  port: process.env.JAWS_PORT
};

SENDGRID = {
  apiKey: process.env.SENDGRID_API_KEY
};
console.log(SENDGRID.apiKey);

module.exports = SENDGRID;
