import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { stkPush } from "./mpesa.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 📲 Donate endpoint
app.post("/donate", async (req, res) => {
  try {
    const { phone, amount } = req.body;

    const result = await stkPush(phone, amount);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔔 Callback (Safaricom response)
app.post("/callback", (req, res) => {
  console.log("M-Pesa Callback:", JSON.stringify(req.body, null, 2));
  res.json({ message: "ok" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});