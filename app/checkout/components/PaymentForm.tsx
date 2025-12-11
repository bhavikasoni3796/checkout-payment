import React from "react";

const PaymentForm = () => {
  return (
    <form className="rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5">
      <div className="items-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">
          Payment Details
        </h2>
      </div>
      <div className="">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Card Number
        </label>
        <input
          className="w-full px-4 py-3 border-2 rounded-xl outline-none border-slate-300 hover:border-slate-400"
          type="text"
          placeholder="1111 2222 3333 4444"
        />
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
