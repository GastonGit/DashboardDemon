import App from "./components/ActivateDevice/ActivateDevice";
import { createRoot } from "react-dom/client";
import React from "react";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
