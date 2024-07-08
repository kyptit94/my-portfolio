import React from "react";
import { createRoot } from "react-dom/client";
import { Menu, Navbar, Image } from "@kl.e/react";
import "@kl.e/scss/src/lib/Menu.css";
import "@kl.e/scss/src/lib/Navbar.css";
import "@kl.e/scss/src/lib/Image.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <div>
        <Navbar>
          <Image src="https://via.placeholder.com/150" height={40} round alt="Logo" />
          <Menu items={
            [
              { title: "Home", href: "#" },
              { title: "About", href: "#about" },
              { title: "Contact", href: "#contact" },
            ]
          } />
        </Navbar>
      </div>
    </React.StrictMode>
  );
}
