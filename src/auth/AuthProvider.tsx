import firebase from "firebase/app";
import { FC, createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

type AuthContextProps = {
  currentUser: firebase.User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        // ログイン済みのユーザー情報があるかをチェック
        const userDoc = await firebase
          .firestore()
          .doc(`user/${user.uid}`)
          .get();
        if (!userDoc.exists) {
          //docがなければ作る
          userDoc.ref.set({
            name: user.displayName,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email,
            id: "",
            belongs: "",
            role: "",
            github: "",
            twitter: "",
            instagram: "",
            discription: "",
            icon_url: "",
          });
        }
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
