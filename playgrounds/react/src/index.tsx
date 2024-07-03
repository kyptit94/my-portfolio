import React from "react";
import { createRoot } from "react-dom/client";

import { Text, Margin } from "@kl.e/react";
import '@kl.e/scss/src/lib/Margin.css';

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Margin size="xl" left>
        <Text text="Hello, World! awesome" />
      </Margin>
    </React.StrictMode>
  );
}
