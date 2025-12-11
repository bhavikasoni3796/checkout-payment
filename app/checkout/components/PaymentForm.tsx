import React from "react";
import { CreditCard } from "lucide-react";

const PaymentForm = () => {
  return (
    <form className="rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5">
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
        />
      </div>
    </form>
  );
};

export default PaymentForm;
