"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { CreditCard } from "lucide-react";
import usePayment from "@/hooks/usePayment";
import { formatCardNumber, formatExpiry } from "../utils/formatters";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

interface PaymentFormProps {
  cart: Cart;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ cart }) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { loading, error, success, submitPayment } = usePayment();

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setExpiry(formatExpiry(value));
    }
  };

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submitPayment({
      cardNumber,
      expiry,
      cvv,
      name,
      cart,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5"
    >
      <div className="flex gap-2 items-center mb-6">
        <CreditCard className="w-6 h-6 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-800">
          Payment Details
        </h2>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Card Number
        </label>
        <div className="relative">
          <input
            className="w-full px-4 py-3 border-2 rounded-xl outline-none border-slate-300 hover:border-slate-400"
            type="text"
            placeholder="1111 2222 3333 4444"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Expiry Date
          </label>
          <input
            className="w-full px-4 py-3 border-2 rounded-xl outline-none border-slate-300 hover:border-slate-400"
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            CVV
          </label>
          <input
            className="w-full px-4 py-3 border-2 rounded-xl outline-none border-slate-300 hover:border-slate-400"
            type="text"
            placeholder="123"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
      </div>
      <div className="">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Cardholder Name
        </label>
        <input
          className="w-full px-4 py-3 border-2 rounded-xl outline-none border-slate-300 hover:border-slate-400"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
        />
      </div>
    </form>
  );
};

export default PaymentForm;
