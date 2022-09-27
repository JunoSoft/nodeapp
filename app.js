const expr = require("express");
const app = expr();
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/",(req,res)=>{
  req.body.n
})
app.listen(3000);
