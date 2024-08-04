// const jwt = require("jsonwebtoken");


// console.log(process.env.JWT_SECRET_KEY)
// const isLoggedIn = async (req) => {
//   if (req.headers.cookie) {
//     let ct = req.headers.cookie.split(";");

//     if (ct[0].split("=")) {
//       ct = ct[0].split("=")[1];
//     } else {
//       ct = ct[1].split("=")[1];
//     }

//     let decoded = await jwt.verify(ct,"asdfsdn");
//     return decoded;
//   }
// };
// module.exports = isLoggedIn;

const jwt = require("jsonwebtoken");

// Use the actual secret key stored in environment variables
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const isLoggedIn = async (req) => {
  try {
    // Check if the 'cookie' header exists
    if (req.headers.cookie) {
      // Extract token from cookie
      let cookies = req.headers.cookie.split(';').map(cookie => cookie.trim());
      let token = cookies.find(cookie => cookie.startsWith('token='));
      
      // If token is found, split it to get the value
      if (token) {
        token = token.split('=')[1];

        // Verify and decode the token
        let decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
      } else {
        throw new Error('Token not found in cookies');
      }
    } else {
      throw new Error('No cookies found');
    }
  } catch (error) {
    // Handle errors (e.g., invalid token, token expired)
    console.error('Error in isLoggedIn:', error);
    return null; // or handle the error as needed
  }
};

module.exports = isLoggedIn;
