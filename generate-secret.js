const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync("./authkey.p8");
const token = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "2 days",
  audience: "https://appleid.apple.com",
  issuer: "95BUQ362FW",
  subject: "com.microsoft.fast.contact.webapp",
  keyid: "9BD5Q58W9Y"
});

console.log("The token is:", token);
