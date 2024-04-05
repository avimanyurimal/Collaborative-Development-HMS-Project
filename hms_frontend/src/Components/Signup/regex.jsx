export const validEmail = new RegExp("\\b[a-z]+[a-z0-9._%+-]*@gmail\\.com\\b");

export const ValidPassword = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[a-zA-Z]).{8,}$`
);
