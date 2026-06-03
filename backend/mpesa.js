import axios from "axios";
import moment from "moment";
import { readFileSync } from "fs";
import process from "process";

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

/* =========================
   ENV VALIDATION
========================= */
const requiredEnvVars = [
  "CONSUMER_KEY",
  "CONSUMER_SECRET",
  "SHORTCODE",
  "PASSKEY",
  "CALLBACK_URL",
];

const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.error("❌ Missing environment variables:", missingVars.join(", "));
  process.exit(1);
}

/* =========================
   GET ACCESS TOKEN
========================= */
export const getAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
  ).toString("base64");

  console.log("🔑 Fetching M-Pesa access token...");

  const response = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  console.log("✅ Access token received");
  return response.data.access_token;
};

/* =========================
   PHONE NORMALIZER
========================= */
const normalizePhone = (phone) => {
  const cleaned = phone.trim().replace(/\s+/g, "");

  if (cleaned.startsWith("+254")) return cleaned.slice(1);        // +2547XX → 2547XX
  if (cleaned.startsWith("0"))   return "254" + cleaned.slice(1); // 07XX → 2547XX
  if (cleaned.startsWith("254")) return cleaned;                   // already correct

  throw new Error(
    `Invalid phone format: "${phone}". Expected 07XXXXXXXX, 2547XXXXXXXX, or +2547XXXXXXXX`
  );
};

/* =========================
   STK PUSH
========================= */
export const stkPush = async (phone, amount) => {

  console.log("🔍 ENV CHECK:", {
    CONSUMER_KEY:    process.env.CONSUMER_KEY    ? "✅ set" : "❌ missing",
    CONSUMER_SECRET: process.env.CONSUMER_SECRET ? "✅ set" : "❌ missing",
    SHORTCODE:       process.env.SHORTCODE        ? "✅ set" : "❌ missing",
    PASSKEY:         process.env.PASSKEY          ? "✅ set" : "❌ missing",
    CALLBACK_URL:    process.env.CALLBACK_URL     ? "✅ set" : "❌ missing",
  });

  const token = await getAccessToken();

  const timestamp = moment().format("YYYYMMDDHHmmss");

  const password = Buffer.from(
    process.env.SHORTCODE + process.env.PASSKEY + timestamp
  ).toString("base64");

  const formattedPhone = normalizePhone(phone);
  const parsedAmount   = parseInt(amount, 10);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    throw new Error(`Invalid amount: "${amount}". Must be a positive integer.`);
  }

  console.log("📲 STK Push payload:", {
    phone: formattedPhone,
    amount: parsedAmount,
    shortcode: process.env.SHORTCODE,
    callback: process.env.CALLBACK_URL,
  });

  const data = {
    BusinessShortCode: process.env.SHORTCODE,
    Password:          password,
    Timestamp:         timestamp,
    TransactionType:   "CustomerPayBillOnline",
    Amount:            parsedAmount,
    PartyA:            formattedPhone,
    PartyB:            process.env.SHORTCODE,
    PhoneNumber:       formattedPhone,
    CallBackURL:       process.env.CALLBACK_URL,
    AccountReference:  "MBAIKIA DONATION",
    TransactionDesc:   "Donation",
  };

  const response = await axios.post(
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    data,
    {
      headers: {
        Authorization:  `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};