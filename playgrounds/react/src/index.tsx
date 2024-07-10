import React from "react";
import { createRoot } from "react-dom/client";
import { Menu, Navbar, Image, Label, Card } from "@kl.e/react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import teacherImage from "../src/public/teacher.png";
import "@kl.e/scss/src/lib/Menu.css";
import "@kl.e/scss/src/lib/Navbar.css";
import "@kl.e/scss/src/lib/Image.css";
import "@kl.e/scss/src/lib/Label.css";
import "@kl.e/scss/src/lib/Card.css";

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
        <Label title="Choose" icon={<ChatBubbleOvalLeftEllipsisIcon />} sub_title="Test sub label" />
        <Card
          title="Vocalbunary"
          image={teacherImage}
          href="#"
          background="#fff8db"
          border="1px solid #fce67e"
          description=""
        />

        <Card
          title="Vocalbunary"
          image={teacherImage}
          href="#"
          background="#fff8db"
          border="1px solid #fce67e"
          description=""
        />

        <Card
          title="Vocalbunary"
          image={teacherImage}
          href="#"
          background="#fff8db"
          border="1px solid #fce67e"
          description=""
        />
      </div>
    </React.StrictMode>
  );
}
