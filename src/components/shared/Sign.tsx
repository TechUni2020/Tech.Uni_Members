// import "firebase/auth";

// import firebase from "firebase/app";
// import type { VFC } from "react";
// import { useCallback } from "react";

// type SignProps = { page: "signin" | "signup" };

// export const Sign: VFC<SignProps> = (props) => {
//   const handleGoogleAuth = useCallback(() => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     const auth = firebase.auth();
//     auth.signInWithRedirect(googleProvider);
//   }, []);
//   const handleAppleAuth = useCallback(() => {
//     alert("handleAppleAuth");
//   }, []);

//   return (
//     <div className="grid place-items-center w-screen h-screen bg-gray-200 dark:bg-gray-700">
//       <div className="p-4">
//         <div className="flex justify-center"></div>
//         <div className="mt-20 space-y-5">
//           <div className="flex">
//             <span>
//               {props.page === "signin"
//                 ? "Googleでログイン"
//                 : "Googleでアカウント作成"}
//             </span>
//           </div>
//           <div className="flex">
//             <span>
//               {props.page === "signin"
//                 ? "Appleでログイン"
//                 : "Appleでアカウント作成"}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
