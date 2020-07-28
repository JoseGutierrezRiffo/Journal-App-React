import React, { Fragment } from "react";
import {Link} from "react-router-dom";

const RegisterScreen = () => {
  return (
      <Fragment>
          <h3 className="auth__title">Register</h3>
          <form>
              <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="auth__input"
              />
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="auth__input"
              />
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="auth__input"
              />
              <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  className="auth__input"
              />
              <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>



              <Link to={"/auth/login"} className="link">Already registered?</Link>
          </form>
      </Fragment>
  );
};

export default RegisterScreen;
