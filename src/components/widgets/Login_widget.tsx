import React, { FC, useCallback, useState, useEffect } from "react";
import firebase from "firebase";
import Router from "next/router";

const Login = () => {
  const auth = firebase.auth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && Router.push("/");
    });
  }, []);
  const handleFormSubmit = async (e) => {
    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }

    console.log(email, password);
  };
  return (
    <div>
      <div>
        <h1>Log in to your account 🔐</h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your Password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
