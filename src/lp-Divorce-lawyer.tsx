import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DiamondLegalPage } from "./screens/DiamondLegal/DiamondLegalPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DiamondLegalPage />
  </StrictMode>,
);
