const jwt = require("jsonwebtoken");
const config = require("../config");
const secret = config.JWT_SECRET || "";

// If you're using TypeScript, you can access JwtPayload like this
/** @type {import("jsonwebtoken").JwtPayload} */
const generateToken = (data: any, expiresIn: any) => {
  return jwt.sign(data, secret, { expiresIn });
};

const verifyToken = (token: any) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null; // In case of an error (invalid token), return null
  }
};

module.exports = { generateToken, verifyToken };
