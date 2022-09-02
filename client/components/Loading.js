import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <p className="loading-page">Loading... </p>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className="cat-loading" src="/images/cat2.png" />
    </div>
  );
};

export default Loading;
