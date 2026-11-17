import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

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
    h("div", { style: { display: "flex", marginTop: 25, fontSize: 38, color: "#dedede", letterSpacing: -1 } }, "Full Stack Developer & Product Engineer"),
    h("div", { style: { display: "flex", marginTop: 20, fontSize: 24, color: "#a8a8a8" } }, "SaaS platforms. AI agents. Useful software."),
  ),
  h("div", { style: { display: "flex", borderTop: "2px solid #aaa", paddingTop: 20, fontSize: 21, color: "#bcbcbc" } }, "muhammadjibran.netlify.app"),
  ),
  { width: 1200, height: 630 },
);

await writeFile("src/app/opengraph-image.png", Buffer.from(await image.arrayBuffer()));

const icon = sharp("src/app/icon.svg", { density: 288 });
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((size) => icon.clone().resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
for (const [index, size] of sizes.entries()) {
  const entry = 6 + index * 16;
  directory[entry] = size;
  directory[entry + 1] = size;
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(images[index].length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
}
await writeFile("public/favicon.ico", Buffer.concat([directory, ...images]));
await icon.resize(180, 180).png().toFile("public/apple-touch-icon.png");
