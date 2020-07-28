import React, { Fragment } from "react";

const NothingSelected = () => {
  return (
    <Fragment>
      <div className="nothing__main-content">
        <p>
          Select something
          <br />
          create an entry
        </p>
        <i className="far fa-star fa-4x mt-5" />
      </div>
    </Fragment>
  );
};

export default NothingSelected;
