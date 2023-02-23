import React from "react";
import "./Main.css";
import Nav from "./Nav";

export default function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <Nav></Nav>
      <div>{children}</div>
    </div>
  );
}
