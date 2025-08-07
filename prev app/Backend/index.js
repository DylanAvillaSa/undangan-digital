require("dotenv").config();

const express = require("express");
const JSON5 = require("json5");
const app = express();
const port = 5000;
const mysql = require("mysql2/promise");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend kamu
    credentials: true, // Agar cookie dapat dikirim
  })
);

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.PORT,
  password: process.env.PASSWORD,
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const db = await pool.getConnection();

  try {
    const query = "SELECT * FROM users WHERE email = ?";
    const [result] = await db.query(query, [email]);

    // Cek jika user ditemukan
    if (result && result.length > 0) {
      const user = result[0];

      // Verifikasi password
      if (await bcrypt.compare(password, user.password)) {
        const userToken = jwt.sign(
          {
            username: user.username,
            role: user.role,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );

        // Set cookie JWT
        res.cookie("token", userToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // pakai HTTPS di production
          maxAge: 3600000, // 1 jam
          sameSite: "strict", // Bisa 'lax' juga, tergantung kebijakan CSRF
        });

        // Kirim response sukses
        res.json({ message: "Berhasil login", token: userToken });
      } else {
        res.status(400).json({ message: "Email/Password salah!" });
      }
    } else {
      res.status(404).json({ message: "User tidak terdaftar!" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  } finally {
    db.release(); // Jangan lupa release connection
  }
});

app.post("/register", async (req, res) => {
  const { name, email, confirm_email, password } = req.body;
  const db = await pool.getConnection();
  const hashedPassword = await bcrypt.hash(password, 10);
  let role = "";

  if (name == "" || email == "" || confirm_email == "" || password == "") {
    res.json({ message: "Input tidak boleh kosong!" });
    return;
  }

  if (email !== confirm_email) {
    res.json({ message: "Alamat email tidak sesuai!" });
    return;
  }

  if (email !== "ismednovian@gmail.com") {
    role = "viewer";
  } else {
    role = "admin";
  }

  try {
    const querySameUser = "SELECT * FROM users WHERE email = ?";
    const [resSameUser] = await db.query(querySameUser, [email]);
    db.release();

    if (resSameUser.length >= 1) {
      res.status(401).json({ message: "Email sudah terdaftar" });
      return;
    }

    const query =
      "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)";
    const [result, fields] = await db.query(query, [
      name,
      email,
      hashedPassword,
      role,
    ]);

    db.release();

    res.status(201).json({ message: "Berhasil mendaftar", role });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });

  res.json({ message: "Logout successful" });
});

const adminRole = async (req, res, next) => {
  const token = await req.cookies.token;
  if (!token) {
    return res.json({ message: "Token tidak ditemukan" });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (user.role !== "admin")
      return res.json({ message: "Token tidak valid!" });

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

app.get("/admin-dashboard", adminRole, async (req, res) => {
  const token = req.cookies.token;
  const user = jwt.verify(token, process.env.SECRET_KEY);
  console.log(user.username);
  res.json({ message: `Hello selamat datang Admin ${user.username}` });
});

const viewerRole = async (req, res, next) => {
  const token = await req.cookies.token;
  if (!token) {
    return res.json({ message: "Token tidak ditemukan" });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (user.role !== "viewer")
      return res.json({ message: "Token tidak valid!" });

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

app.get("/paket", async (req, res) => {
  const db = await pool.getConnection();

  try {
    const [results] = await db.query("SELECT * FROM paket_undangan");
    const raw = results[0];

    const data = {
      Bronze: JSON5.parse(raw.Bronze),
      Silver: JSON5.parse(raw.Silver),
      Gold: JSON5.parse(raw.Gold),
      Platinum: JSON5.parse(raw.Platinum),
    };

    console.log(data);

    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
    db.release();
  }
});

app.get("/user", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.get("/all-user", async (req, res) => {
  const db = await pool.getConnection();

  try {
    const query = "SELECT * FROM users";
    const [result] = await db.query(query);

    res.json({ data: result });
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get("/viewer-dashboard", viewerRole, async (req, res) => {
  const token = req.cookies.token;
  const user = jwt.verify(token, process.env.SECRET_KEY);
  res.json({ message: `Hello selamat datang Admin ${user.username}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
