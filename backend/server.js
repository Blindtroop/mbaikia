import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import process from "process";
import { stkPush } from "./mpesa.js";

/* =========================
   MANUAL .ENV LOADER
========================= */
try {
  const env = readFileSync("./.env", "utf-8");
  env.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const [key, ...rest] = trimmed.split("=");
    if (key) process.env[key.trim()] = rest.join("=").trim();
  });
  console.log("✅ .env loaded successfully");
} catch (e) {
  console.error("❌ Could not read .env file:", e.message);
}

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   📲 DONATE ENDPOINT
========================= */
app.post("/donate", async (req, res) => {
  try {
    const { phone, amount } = req.body;

    if (!phone || !amount) {
      return res.status(400).json({ error: "phone and amount are required" });
    }

    console.log("📩 DONATE REQUEST:", { phone, amount });

    const result = await stkPush(phone, amount);

    console.log("✅ STK SUCCESS:", result);

    res.json(result);
  } catch (err) {
    if (err.response) {
      console.error("🔥 SAFARICOM ERROR:");
      console.error("  Status :", err.response.status);
      console.error("  Body   :", JSON.stringify(err.response.data, null, 2));
      return res.status(500).json({ error: err.response.data });
    }

    if (err.message) {
      console.error("🔥 APP ERROR:", err.message);
      return res.status(400).json({ error: err.message });
    }

    console.error("🔥 UNKNOWN ERROR:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

/* =========================
   🔔 M-PESA CALLBACK URL
========================= */
app.post("/callback", (req, res) => {
  console.log("🔔 CALLBACK RECEIVED:", JSON.stringify(req.body, null, 2));
  res.json({ message: "Callback received" });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000");
});