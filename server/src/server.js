import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import { checkDatabaseConnection } from "./db.js";
import apiRoutes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

// Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Amit Kumar Portfolio API is running.",
  });
});

// Health check
app.get("/api/health", async (req, res) => {
  try {
    const databaseConnected = await checkDatabaseConnection();

    return res.status(databaseConnected ? 200 : 503).json({
      success: databaseConnected,
      status: databaseConnected ? "healthy" : "unhealthy",
      database: databaseConnected ? "connected" : "disconnected",
      service: "portfolio-api",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Health check error:", error);

    return res.status(503).json({
      success: false,
      status: "unhealthy",
      database: "disconnected",
      service: "portfolio-api",
    });
  }
});

// All API routes
app.use("/api", apiRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// Start server
const startServer = async () => {
  const databaseConnected = await checkDatabaseConnection();

  if (!databaseConnected) {
    console.warn(
      "Warning: Database is not connected. DATABASE_URL is not configured yet."
    );
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio API running on port ${PORT}`);
  });
};

startServer();
