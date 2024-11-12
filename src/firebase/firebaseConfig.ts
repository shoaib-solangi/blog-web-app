// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_apiKey,
//     authDomain: process.env.NEXT_PUBLIC_authDomain,
//     projectId: process.env.NEXT_PUBLIC_projectId,
//     storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//     messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//     appId: process.env.NEXT_PUBLIC_appId
// };

// export const app = initializeApp(firebaseConfig);



"use client"
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId
};

export const app = initializeApp(firebaseConfig);

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  if (typeof window !== "undefined") {
    getAnalytics(app);
  }
}, []);
