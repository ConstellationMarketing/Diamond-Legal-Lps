import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DiamondLegalThankYou } from "./screens/DiamondLegal/DiamondLegalThankYou";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DiamondLegalThankYou />
  </StrictMode>,
);
