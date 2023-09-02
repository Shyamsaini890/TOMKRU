import React, { createContext, useState } from "react";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserState = (props) => {
  const { push } = useRouter();
  const loginHandler = async (email, password) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      push("/dashboard");
    } catch (e) {
      console.log(e.message);
    }
  };

  const signUpHandler = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: email.split("@")[0],
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        push("/");
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider value={{ loginHandler, signUpHandler, handleLogout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
