import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import validator from "validator/es";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setError, setRemoveError } from "../../redux/actions/uiAction";
import { startRegisterWithEmailAndPassword } from "../../redux/actions/authAction";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = e => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(setRemoveError());
    return true;
  };

  return (
    <Fragment>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
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
        <input
          type="password"
          name="password2"
          placeholder="Confirm password"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to={"/auth/login"} className="link">
          Already registered?
        </Link>
      </form>
    </Fragment>
  );
};

export default RegisterScreen;
