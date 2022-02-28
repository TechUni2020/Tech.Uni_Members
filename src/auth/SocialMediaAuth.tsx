import { auth } from "../utils/firebase";

const socialMediaAuth = (provider) => {
  return auth
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default socialMediaAuth;
