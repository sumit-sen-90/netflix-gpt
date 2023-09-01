export const checkValidation = (email, password) => {
  const isEmailValid = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
