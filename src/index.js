import React from "react";
import { createRoot } from "react-dom/client";

/* Self-hosted typefaces — latin subsets only, no external font requests.
   Geist: interface and body · Instrument Serif: editorial accents ·
   JetBrains Mono: labels, meta and numerals. */
import "@fontsource-variable/geist";
import "@fontsource-variable/jetbrains-mono";
/* Extension-less subpaths: the package's exports map points these at the CSS. */
import "@fontsource/instrument-serif/latin-400";
import "@fontsource/instrument-serif/latin-400-italic";

import App from "./App";

const container = document.getElementById("root");
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
