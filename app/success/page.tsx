"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

function SuccessPage() {
  const router = useRouter();

  const onReset = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-xl">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          Payment Successful!
        </h1>
        <p className="text-slate-600 mb-8">
          Your order has been confirmed and will be delivered soon.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <p className="text-sm text-slate-600 mb-1">Order Number</p>
          <p className="text-xl font-mono font-semibold text-slate-800">
            ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>

        <button
          onClick={onReset}
          className="w-full bg-slate-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-700 transition-colors cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
