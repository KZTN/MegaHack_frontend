import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function ActionsHeader() {
  return (
    <header className="actionsheader">
      <div className="upper-header">
        <div className="box-logo">
          <Link to="/">
            <h3>XXXX</h3>
          </Link>
        </div>
        <div className="header-element">
          <span>Contato</span>
        </div>
      </div>
      <div className="box-actions">
        <div className="box-account">
          <Link to="/profile">
            <span>Minha conta</span>
          </Link>
        </div>
        <div className="box-voucher">
          <Link to="/home">
            <span>Pratos de hoje</span>
          </Link>
        </div>
        <div className="box-about">
          <span>Sobre</span>
        </div>
      </div>
    </header>
  );
}
