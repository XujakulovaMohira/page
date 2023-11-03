import React from "react";
import "./App.css";
const AppList = () => {
  const title = "Hello ReqRes users!";
  const subtitle = "This is a website";
  return (
    <div className="appList">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>Today's date is: {new Date().toDateString()}</p>
    </div>
  );
};

export default AppList;
