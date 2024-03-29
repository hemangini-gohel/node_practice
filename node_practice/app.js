const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./", "views", "404.html"));
  // console.log("object");
});

const server = http.createServer(app);

server.listen(3000);
