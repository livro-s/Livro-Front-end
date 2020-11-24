import React from "react";
import Navbar from "../Navbar";
import ScrollTop from "../ScrollTop";
import Topbar from "../Topbar";
import "./PageTemplate.scss";

const PageTemplate = ({ isSearch = true, children }) => {
  return (
    <div className="PageTemplate">
      <Topbar isSearch={isSearch} />
      <Navbar />
      {children}
      <ScrollTop />
    </div>
  );
};

export default PageTemplate;
