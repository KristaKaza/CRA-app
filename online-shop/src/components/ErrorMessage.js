import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <h4>Error: {message}</h4>
    </div>
  );
};

export default ErrorMessage;
