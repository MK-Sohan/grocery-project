import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Share/Loading";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

import { async } from "@firebase/util";
import Useuser from "../../Hooks/Useuser";
const Login = () => {
  let location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [updatePassword, updating, upasserror] = useUpdatePassword(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, passerror] =
    useSendPasswordResetEmail(auth);
  const handlesigninWithemailpass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  const [token] = Useuser(user || guser);
  // const handleemail = (e) => {
  //   const email = e.target.value;
  //   setEmail(email);
  //   console.log(email);
  // };
  const resetPassword = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(email);
    console.log(email);
    alert("Please Check Your Email");
  };

  if (loading || gloading || updating) {
    return <Loading></Loading>;
  }

  let signInError;
  if (error || gerror) {
    signInError = <p>{error?.message}</p>;
  }

  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <section class="home-2" id="home">
      <div class="image">
        <img src="https://i.ibb.co/C9ctsHJ/home-img.png" alt="" />
      </div>

      <div class="content-2">
        <h1>Login</h1>
        <form onSubmit={handlesigninWithemailpass} className="form-container">
          <div className="content-inputs">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              required
            />
            <input type="password" name="password" />
          </div>
          <div className="error2">{signInError}</div>
          <p>
            {/* <Link onClick={resetPassword} className="link" to="/login">
              Forget Pass?
            </Link> */}
            <button onClick={resetPassword}>forget pass?</button>
          </p>
          <div className="login-button">
            <button className="button">Login</button>
          </div>
        </form>
        <div className="register-route">
          <p>
            New to groco?
            <Link className="link" to="/signup">
              Create an Account
            </Link>
          </p>
          <br />
          <p>Or</p>
        </div>
        <div className="google-button">
          <button onClick={() => signInWithGoogle()} className="button-2">
            google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
