import { auth } from "../firebase";

const socialMediaAuth = (provider) => {
  return auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log("res", res); //こっちが走っている
      return res.user;
    })
    .catch((err) => {
      console.log("err", err);
      return err; // こっちが走ってから
    });
};

export default socialMediaAuth;
