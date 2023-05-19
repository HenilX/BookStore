import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Login() {
  return (
    <>
      <Header />
      <h1>LogComponent</h1> <br />
      <Link to="/Register">Register</Link>
      <p>hello</p>
      <Footer />
    </>
  );
}

export default Login;
