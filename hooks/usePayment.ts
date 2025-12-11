import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

interface PaymentData {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
  cart: Cart;
}

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function submitPayment(data: PaymentData) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Payment failed");
      } else {
        setSuccess(true);
      }
    } catch (error) {
      setError("Network error");
    }
    setLoading(false);
  }
  return { loading, error, success, submitPayment };
}

export default usePayment;
