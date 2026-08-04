import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
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

    const contactMessage = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || "Portfolio Contact",
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    console.log("New portfolio contact:", contactMessage);

    return res.status(201).json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process your message.",
    });
  }
});

export default router;
