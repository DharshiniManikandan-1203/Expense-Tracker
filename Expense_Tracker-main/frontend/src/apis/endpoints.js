const mode = process.env.REACT_APP_APP_MODE;
let domain = "https://expense-tracker-navy-phi.vercel.app/expense-tracker/";
export default {
  signIn: `${domain}api/auth/login`,
  resetToken: `${domain}api/auth/reset-token`,
  userAndSystemFetchByToken: `${domain}api/user/fetch-by-token`,
  userBase: `${domain}api/user/`,
  userById: `${domain}api/user/fetch-by-id`,
  userPassword: `${domain}api/user/password`,
  category: `${domain}api/category`,
  transaction: `${domain}api/transaction`,
  userBalance: `${domain}api/user/user-balance`,
};
