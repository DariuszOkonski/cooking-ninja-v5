import React from "react";
import "./Loading.css";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="loading">
      <img src={require("../../images/loading.gif")} alt="" />
      <h2 className="loading-header">Loading...</h2>
    </div>
  );
};

export default Loading;
