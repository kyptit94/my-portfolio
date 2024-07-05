import React from "react";
import { createRoot } from "react-dom/client";
import { Menu } from "@kl.e/react";
import "@kl.e/scss/src/lib/Menu.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <div style={{ background: "#000" }}>
        <Menu items={
          [
            { title: "Home", href: "#" },
            { title: "About", href: "#about" },
            { title: "Contact", href: "#contact" },
          ]
        } />
      </div>
    </React.StrictMode>
  );
}
