import React from "react";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import "./PageTemplate.scss";

const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Topbar />
      <Navbar />
      {children}
    </div>
  );
};

export default PageTemplate;
