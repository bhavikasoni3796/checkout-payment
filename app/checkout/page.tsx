import React from "react";
import PaymentForm from "./components/PaymentForm";
import CartSummary from "./components/CartSummary";

const CheckoutApp = () => {
  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800  mb-2">Checkout</h1>
          <p className="text-slate-600">Complete your purchase securely</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <PaymentForm />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutApp;
