import { StrictMode } from "React";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayout/>
  </StrictMode>,
);
