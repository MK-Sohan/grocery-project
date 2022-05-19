import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Share/Loading";
import "./Signup.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Useuser from "../../Hooks/Useuser";

const Signup = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  // event handeler start---------------------------------------------
  const handleEmailPasslogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(name, email, pass);
    createUserWithEmailAndPassword(email, pass);
    e.target.reset();
  };
  const [token] = Useuser(user || guser);

  if (loading || gloading) {
    return <Loading></Loading>;
  }

  let signInError;
  if (error || gerror) {
    signInError = (
      <p>
        <small>{error?.message}</small>
      </p>
    );
  }

  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  // console.log(token);
  // authentication code end==============================
  return (
    <section class="home-2" id="home">
      <div class="image">
        <img src="https://i.ibb.co/C9ctsHJ/home-img.png" alt="" />
      </div>

      <div class="content-2">
        <h1>Signup</h1>
        <form onSubmit={handleEmailPasslogin} className="form-container">
          <div className="content-inputs">
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <input type="password" name="password" />
          </div>
          <div className="error">{signInError}</div>

          <div className="login-button">
            {/* <button className="button">Signup</button> */}
            <input className="button" type="submit" value="Signup" />
          </div>
        </form>
        <div className="register-route">
          <p>
            Already have an Account?{" "}
            <Link className="link" to="/login">
              Log in here
            </Link>
          </p>{" "}
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

export default Signup;
