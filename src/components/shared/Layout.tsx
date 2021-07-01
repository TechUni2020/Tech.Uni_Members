import React from "react";
import Header from "../layouts/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer>Tech Uni</footer>
    </div>
  );
}
