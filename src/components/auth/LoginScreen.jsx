import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {
  startGoogleAuthLogin,
  startLoginWithEmailAndPassword
} from "../../redux/actions/authAction";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "test@gmail.com",
    password: "123123"
  });
  const { email, password } = formValues;

  const handleLogin = e => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleAuthLogin());
  };

  return (
    <Fragment>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to={"/auth/register"} className="link">
          Create new account
        </Link>
      </form>
    </Fragment>
  );
};

export default LoginScreen;
