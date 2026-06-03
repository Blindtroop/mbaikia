import axios from "axios";
import moment from "moment";
import dotenv from "dotenv";
import { getAccessToken } from "./auth.js";

dotenv.config();

export const stkPush = async (phone, amount) => {
  const token = await getAccessToken();

  const timestamp = moment().format("YYYYMMDDHHmmss");

  const password = Buffer.from(
    process.env.SHORTCODE + process.env.PASSKEY + timestamp
  ).toString("base64");

  const response = await axios.post(
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {
      BusinessShortCode: process.env.SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: "Mbaikia Donation",
      TransactionDesc: "Donation",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};