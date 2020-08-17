import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import JournalScreen from "../components/journal/JournalScreen";
import {  startLoadingNotes } from "../redux/actions/notesAction";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    /* Si existe un user?.uid, significa que hay un user ingresado */
    firebase.auth().onAuthStateChanged(async user => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));

      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Please Wait ...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path={"/auth"}
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path={"/"}
            component={JournalScreen}
          />
          <Redirect to={"/auth/login"} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
