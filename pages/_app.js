import React, { useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import UserState from "@/context/UserContext";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import { redirect } from "next/navigation";
import Login from "./login";

const App = ({ Component, pageProps }) => {
  return (
    <UserState>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserState>
  );
};

export default App;
