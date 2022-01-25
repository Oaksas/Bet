import React from "react";
import "./Css/navBar.css";

function Footer() {
  return (
    <div className="footer ">
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">
          © {new Date().getFullYear()} Copyright
          <a> Mindplex</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
