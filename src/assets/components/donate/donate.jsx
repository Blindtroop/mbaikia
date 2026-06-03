import { useState } from "react";
import axios from "axios";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

export default function Donate() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const donate = async () => {
    if (!phone || !amount) {
      setStatus("validation");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await axios.post("http://localhost:5000/donate", {
        phone,
        amount,
      });

      setStatus("success");
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="donate" className="w-full bg-white py-20 px-6 lg:px-16">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Fund the Movement
        </h2>

        {/* Amounts */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {PRESET_AMOUNTS.map((p) => (
            <button
              key={p}
              onClick={() => setAmount(String(p))}
              className="border p-2"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="2547XXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        {/* Button */}
        <button
          onClick={donate}
          disabled={loading}
          className="bg-black text-[#0F8643] px-6 py-3"
        >
          {loading ? "Sending..." : "Donate via M-Pesa"}
        </button>

        {/* Status */}
        {status === "success" && <p>Check your phone 📲</p>}
        {status === "error" && <p>Failed ❌</p>}
        {status === "validation" && <p>Fill all fields</p>}
      </div>

    </section>
  );
}