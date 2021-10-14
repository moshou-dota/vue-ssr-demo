const fs = require("fs");
const path = require("path");
const express = require("express");
const serverBundle = require(path.resolve(
  process.cwd(),
  "serverDist",
  "vue-ssr-server-bundle.json"
));
const clientManifest = require(path.resolve(
  process.cwd(),
  "dist",
  "vue-ssr-client-manifest.json"
));
const { createBundleRenderer } = require("vue-server-renderer");
const app = express();

const template = fs.readFileSync(
  path.resolve(__dirname, "index.html"),
  "utf-8"
);
const renderer = createBundleRenderer(serverBundle, {
  template, // 使用HTML模板
  clientManifest, // 将客户端的构建结果清单传入
});

app.use(express.static(path.resolve(process.cwd(), "dist")));

app.get("*", function(req, res) {
  const context = {
    url: req.url,
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.send("500 server error");
      return;
    }
    console.log('context==', context)
    res.send(html);
  });
});

app.listen(8080);

process.on("uncaughtException", (err) => {
  console.error("有一个未捕获的错误", err);
  process.exit(1); //强制性的（根据 Node.js 文档）
});
