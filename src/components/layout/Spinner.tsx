import React from "react";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={require("./assets/spinner.gif")}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
