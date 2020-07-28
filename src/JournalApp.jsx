import React, { Fragment } from "react";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

const JournalApp = () => {
  return (
    <Fragment>
      <AppRouter />
    </Fragment>
  );
};

export default JournalApp;
