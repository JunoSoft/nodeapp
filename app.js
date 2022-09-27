const expr = require("express");
const app = expr();
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/", (req, res) => {
  req.body.n;
});
const port = process.env.PORT || 3000 ;
app.listen(port, () => console.log(`server is running on  ${port}`));
