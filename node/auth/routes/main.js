const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("sync-mysql");
const env = require("dotenv").config({ path: "../../.env" });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var connection = new mysql({
  host: process.env.host,
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  database: process.env.database,
});

app.get("/Hello", (req, res) => {
  res.send("Hello Node JS~!!");
});

app.get("/select", (req, res) => {
  const result = connection.query("select*from user");
  console.log(result);
  res.send(result);
});

app.get("/selectQuery", (req, res) => {
  const id = req.query.id;
  const result = connection.query("select*from user where userid = ?", [id]);
  console.log(result);
  res.send(result);
});

app.post("/insert", (req, res) => {
  const { id, pw } = req.body;
  const result = connection.query("insert into user values (?, ?)", [id, pw]);
  console.log(result);
  res.redirect("/selectQuery?id=" + req.body.id);
});

app.post("/update", (req, res) => {
  const { id, pw } = req.body;
  const result = connection.query(
    "update user set passwd = ? where userid = ?",
    [pw, id]
  );
  console.log(result);
  res.redirect("/selectQuery?id=" + req.body.id);
});

app.post("/delete", (req, res) => {
  const id = req.body.id;
  const result = connection.query("delete from user where userid = ?", [id]);
  console.log(result);
  res.redirect("/select");
});

app.post("/login", (req, res) => {
  // const { id, pw } = req.body;
  //   const [result] = await connection.query(
  //     "SELECT * FROM user WHERE userid = ? AND passwd = ?",
  //     [id, pw]
  //   );

  //   if (result.length === 0) {
  //     console.log("로그인 실패: 아이디 또는 비밀번호가 잘못됨");
  //     return res.redirect("/error.html");
  //   }

  //   if (id === "root" || id === "admin") {
  //     console.log(`${id} 로그인함 (관리자)`);
  //     return res.redirect("/member.html");
  //   } else {
  //     console.log(`${id} 로그인함 (일반 사용자)`);
  //     return res.redirect("/main.html");
  //   }
  // } catch (error) {
  //   console.error("로그인 처리 중 오류 발생:", error);
  //   res.redirect("/error.html");
  // }

  const { id, pw } = req.body;
  const result = connection.query(
    "select * from user where userid=? and passwd=?",
    [id, pw]
  );
  if (result.length == 0) {
    res.redirect("error.html");
  }
  if (id == "admin" || id == "root") {
    console.log(id + "=> Administrator Logined");
    res.redirect("member.html");
  } else {
    console.log(id + "=> User Logined");
    res.redirect("main.html");
  }
});

app.post("/register", (req, res) => {
  // const { id, pw } = req.body;
  // const [existingId] = connection.query(
  //   "select * from user  where userid = ?",
  //   [id]
  // );
  // if (existingId) {
  //   return res.send(`
  //     <script>
  //       alert("이미 존재하는 아이디입니다.");
  //       window.location.href = "/register.html";
  //     </script>
  //   `);
  // } else {
  //   const result = connection.query("insert into user values (?, ?)", [id, pw]);
  //   console.log(result);
  //   res.redirect("/index.html");
  // }

  const { id, pw } = req.body;
  const result = connection.query("insert into user values (?,?)", [id, pw]);
  console.log(result);
  res.redirect("/");
});

module.exports = app;
