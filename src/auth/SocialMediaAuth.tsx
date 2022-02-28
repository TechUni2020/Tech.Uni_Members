import { auth } from "../utils/firebase";

const socialMediaAuth = (provider) => {
  return auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res)
      return res.user;
    })
    .catch((err) => {
      console.log(err)
      return err;
    });
};

export default socialMediaAuth;
