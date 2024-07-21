export const checkValidData = (email, password) => {
  const checkEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (email === "") {
    return "Please enter a valid email id";
  }
  if (!checkEmail) {
    return "Email is not valid";
  }

  if (password === "") {
    return "Please enter a valid password";
  }

  if (!checkPassword) {
    return "Password is not valid";
  }

  return null; // if both email and password are valid
};
