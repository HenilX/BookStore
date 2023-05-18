import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Login() {
  return (
    <>
      <Header />
      <h1>Login Component</h1> <br />
      <Link to="/Register">Register</Link>
      <Footer />
    </>
  );
}

export default Login;
