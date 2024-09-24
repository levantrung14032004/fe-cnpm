import ClipLoader from "react-spinners/ClipLoader";
import "./Spinner.css";
import React from "react";
const Spinner = React.memo(() => {
  return (
    <div className="container-spinner">
      <ClipLoader color="#198aff" />
    </div>
  );
});
export default Spinner;