const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/proxy", createProxyMiddleware({
  target: "https://example.com", // cambiar al sitio que quieras
  changeOrigin: true,
  pathRewrite: { "^/proxy/": "/" }
}));

app.get("/", (req, res) => {
  res.send("🌊 Ravine Proxy activo en Render!");
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy corriendo en http://localhost:${PORT}`);
});
