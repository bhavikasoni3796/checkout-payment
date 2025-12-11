"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard } from "lucide-react";
import SubmitButton from "./SubmitButton";
import usePayment from "../../../hooks/usePayment";
import { formatCardNumber, formatExpiry } from "../utils/formatters";
import {
  validateCVV,
  validateCard,
  validateExpiry,
  validateName,
} from "../utils/validators";

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

  const router = useRouter();

  const { loading, error, success, submitPayment } = usePayment();

  const isValid =
    validateCard(cardNumber) &&
    validateExpiry(expiry) &&
    validateCVV(cvv) &&
    validateName(name);

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

  useEffect(() => {
    if (success) {
      router.push("/success");
    }
  }, [success]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5"
    >
      <div className="flex items-center gap-2 mb-6">
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
            type="text"
            placeholder="1111 2222 3333 4444"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="w-full px-4 py-3 border-2 rounded-xl transition-all outline-none border-slate-300 bg-white hover:border-slate-400"
          />
          <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
            className="w-full px-4 py-3 border-2 rounded-xl transition-all outline-none border-slate-300 bg-white hover:border-slate-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            CVV
          </label>
          <input
            type="text"
            placeholder="123"
            value={cvv}
            onChange={handleCvvChange}
            className="w-full px-4 py-3 border-2 rounded-xl transition-all outline-none border-slate-300 bg-white hover:border-slate-400"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          className="w-full px-4 py-3 border-2 rounded-xl transition-all outline-none border-slate-300 bg-white hover:border-slate-400"
        />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}
      <SubmitButton loading={loading} isValid={isValid} />
    </form>
  );
};

export default PaymentForm;
