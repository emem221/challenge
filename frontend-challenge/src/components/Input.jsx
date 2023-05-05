import React from "react";

const Input = ({ label, styledClasses }) => {
  return (
    <div>
      <h5 className="my-3 font-semibold text-base">{label}</h5>
      <input
        placeholder="Enter deposit amount"
        className="text-box text-lato text-base border-gray"
      ></input>
    </div>
  );
};

export default Input;
