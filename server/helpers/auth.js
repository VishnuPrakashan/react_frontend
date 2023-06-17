const bcrypt = require("bcrypt");

// to hash the password
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    //genSalt() - to increase the security of actual password
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

// to comparepassword for login API

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

module.exports = {
  hashPassword,
  comparePassword,
};
