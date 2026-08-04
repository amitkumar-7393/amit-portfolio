import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import { query, checkDatabaseConnection } from "./db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

/* =========================
   BASIC ROUTE
========================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Amit Kumar Portfolio API is running.",
  });
});

/* =========================
   HEALTH CHECK
========================= */

app.get("/api/health", async (req, res) => {
  try {
    const result = await query("SELECT NOW() AS current_time");

    res.json({
      success: true,
      status: "healthy",
      database: "connected",
      timestamp: result.rows[0].current_time,
    });
  } catch (error) {
    console.error("Health check error:", error);

    res.status(503).json({
      success: false,
      status: "unhealthy",
      database: "disconnected",
    });
  }
});

/* =========================
   CONTACT API
========================= */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const result = await query(
      `INSERT INTO contacts
        (name, email, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at`,
      [
        name.trim(),
        email.trim().toLowerCase(),
        subject?.trim() || "Portfolio Contact",
        message.trim(),
      ]
    );

    res.status(201).json({
      success: true,
      message: "Your message was sent successfully.",
      data: {
        id: result.rows[0].id,
        createdAt: result.rows[0].created_at,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to save your message.",
    });
  }
});

/* =========================
   404 ROUTE
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

/* =========================
   ERROR HANDLER
========================= */

app.use((err, req, res, next) => {
  console.error("Server error:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

/* =========================
   START SERVER
========================= */

const startServer = async () => {
  await checkDatabaseConnection();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio API running on port ${PORT}`);
  });
};

startServer();
