import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://house-of-betty.netlify.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/api/products", (req, res) => {
  pool.query("SELECT * FROM products", (error, results) => {
    if (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json(results);
  });
});

app.get("/api/date-night-products", (req, res) => {
  pool.query("SELECT * FROM date_night_products", (error, results) => {
    if (error) {
      console.error("Error fetching date-night products:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
