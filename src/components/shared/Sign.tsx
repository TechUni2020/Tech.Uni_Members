// import "firebase/auth";
// import firebase from "firebase/app";
// import { auth } from "../../utils/firebase";
// import type { VFC } from "react";
// import { useCallback, useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { GoogleIcon } from "../Icon/GoogleIcon";
// import { Button } from "../shared/Button";
// import Layout from "../shared/Layout";
// import Link from "next/link";

// type SignProps = { page: "signin" | "signup" };

// export const Sign: VFC<SignProps> = (props) => {
//   const handleGoogleAuth = useCallback(() => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithRedirect(googleProvider);
//   }, []);

//   //サインアップ・サインイン共通箇所
//   const router = useRouter();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       user && router.push("/");
//     });
//   }, []);

//   const signUp = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//       //メール認証いるかな・・
//       // await auth.currentUser.sendEmailVerification();
//       // router.push("/sent");
//       router.push("/");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const signIn = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       router.push("/");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <Layout>
//       <div className="grid place-items-center w-screen h-screen bg-gray-200 dark:bg-gray-700">
//         <div className="w-2/5 border bg-white">
//           <div className="my-12 text-center">
//             <h2 className="text-4xl cfont-bold">
//               {props.page === "signin" ? "ログイン" : "アカウント作成"}
//             </h2>
//             <p className="my-4">
//               <span className="font-semibold">メールアドレス</span>と
//               <span className="font-semibold">パスワード</span>
//               を入力してください。
//             </p>
//             <form onSubmit={props.page === "signin" ? signIn : signUp}>
//               <div className="mb-2">
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="text-xl w-3/5 p-3 border rounded"
//                   id="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-2">
//                 <input
//                   type="password"
//                   className="text-xl w-3/5 p-3 border rounded"
//                   placeholder="パスワード"
//                   id="password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="text-xl w-3/5 bg-green-800 text-white py-2 rounded"
//               >
//                 {props.page === "signin" ? "ログイン" : "アカウント作成"}
//               </button>
//             </form>
//           </div>
//           <Button className="py-4 w-72 sm:w-80" onClick={handleGoogleAuth}>
//             <div className="flex">
//               <GoogleIcon className="mr-3" />
//               <span>
//                 {props.page === "signin"
//                   ? "Googleでログイン"
//                   : "Googleでアカウント作成"}
//               </span>
//             </div>
//           </Button>
//         </div>
//       </div>
//     </Layout>
//   );
// };
