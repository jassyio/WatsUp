// C:\Users\user\Desktop\watsUp\WatsUp\backend\utils\validate.js

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6; // Customize this based on password policy
  };
  
  export const validateUsername = (username) => {
    return username.length >= 3; // Customize this based on username policy
  };
  