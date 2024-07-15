import React from "react";
import { createRoot } from "react-dom/client";
import { Menu, Navbar, Image, Text, About, Heading } from "@kl.e/react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import teacherImage from "../src/public/teacher.png";
import "@kl.e/scss/src/lib/Menu.css";
import "@kl.e/scss/src/lib/Navbar.css";
import "@kl.e/scss/src/lib/Image.css";
import "@kl.e/scss/src/lib/Label.css";
import "@kl.e/scss/src/lib/Card.css";
import "@kl.e/scss/src/lib/About.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
        <header>
          <Navbar>
            <Menu items={
              [
                { title: "Home", href: "#" },
                { title: "About", href: "#about" },
                { title: "Contact", href: "#contact" },
              ]
            } />
          </Navbar>
        </header>
        <main>
          <About imageProfile={teacherImage} name="Kelvin Pham" role="Fullstack JS Software Engineer" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem" />
        </main>
    </React.StrictMode>
  );
}
