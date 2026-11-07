import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";

const image = new ImageResponse(
  h("div", {
    style: {
      width: "100%", height: "100%", display: "flex", flexDirection: "column",
      justifyContent: "space-between", padding: "68px", background: "#050505", color: "#f8f8f8",
      fontFamily: "sans-serif", border: "1px solid #444",
    },
  },
  h("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 22, color: "#c4c4c4", letterSpacing: 4 } },
    h("span", null, "MJ / PORTFOLIO"),
    h("span", null, "PRODUCT ENGINEERING"),
  ),
  h("div", { style: { display: "flex", flexDirection: "column" } },
    h("div", { style: { display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -5, lineHeight: 1.05 } }, "Muhammad Jibran"),
    h("div", { style: { display: "flex", marginTop: 25, fontSize: 38, color: "#dedede", letterSpacing: -1 } }, "Full-Stack & AI Engineer"),
    h("div", { style: { display: "flex", marginTop: 20, fontSize: 24, color: "#a8a8a8" } }, "SaaS platforms. AI agents. Useful software."),
  ),
  h("div", { style: { display: "flex", borderTop: "2px solid #aaa", paddingTop: 20, fontSize: 21, color: "#bcbcbc" } }, "muhammadjibran.netlify.app"),
  ),
  { width: 1200, height: 630 },
);

await writeFile("src/app/opengraph-image.png", Buffer.from(await image.arrayBuffer()));

const icon = new ImageResponse(
  h("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: "#151515", color: "white", fontSize: 68, fontWeight: 700 } }, "MJ"),
  { width: 180, height: 180 },
);
await writeFile("public/apple-touch-icon.png", Buffer.from(await icon.arrayBuffer()));
