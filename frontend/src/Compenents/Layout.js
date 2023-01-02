import React from "react";


const Layout = (props) => {
  return (
    <>
      <div className="header">
        <div className="col">
        <a href="/" className="logo">RQ</a>
        </div>
        <div className="col">
        <span className="name">profile</span>
        <a href="/login" className="login">Login</a>
        </div>
      </div>

      <div className="main">{props.children}</div>
      <div className="footer">
        <p>&copy;2023.All rights reserver.Powered by RapidQube.</p>
      </div>
    </>
  );
};

export default Layout;
