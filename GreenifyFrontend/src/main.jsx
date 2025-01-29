import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./NotFound.jsx";
import StatsEntryPage from "./StatsEntry.jsx";
import AnalyticsPage from "./Analytics.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<App />} />
        <Route path="stats-entry" element={<StatsEntryPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
