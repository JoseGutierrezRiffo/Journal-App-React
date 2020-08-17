import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";
import Swal from "sweetalert2";
import { finishLoading, startLoading } from "./uiAction";
import { noteLogout } from "./notesAction";

export const startLoginWithEmailAndPassword = (email, password) => {
  return dispatch => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch(error => {
        console.log(error);
        dispatch(finishLoading());
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => {
        console.log(error);
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startGoogleAuthLogin = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  };
};

export const startLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut();
    dispatch(noteLogout());
    dispatch(logout());
  };
};

export const logout = () => {
  return { type: types.logout };
};
