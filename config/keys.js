exports.JAWSBD = {
  url: process.env.JAWS_URL,
  username: process.env.JAWS_USERNAME,
  password: process.env.JAWS_PASSWORD,
  database: process.env.JAWS_DATABASE,
  port: process.env.JAWS_PORT
};

module.exports = {
  google:{
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET
  }
}
