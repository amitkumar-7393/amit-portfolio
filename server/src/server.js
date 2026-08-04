import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

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

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Amit Kumar Portfolio API is running.",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    service: "portfolio-api",
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required.",
    });
  }

  console.log("New contact message:", {
    name,
    email,
    subject: subject || "",
    message,
  });

  return res.status(201).json({
    success: true,
    message: "Your message was received successfully.",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio API running on port ${PORT}`);
});
