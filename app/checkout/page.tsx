import React from "react";
import PaymentForm from "./components/PaymentForm";
import CartSummary from "./components/CartSummary";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

const CheckoutApp = () => {
  const cart: Cart = {
    items: [
      { id: 1, name: "Product A", price: 499, quantity: 1 },
      { id: 2, name: "Product B", price: 999, quantity: 2 },
    ],
  };

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800  mb-2">Checkout</h1>
          <p className="text-slate-600">Complete your purchase securely</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <PaymentForm cart={cart} />
          </div>
          <div>
            <CartSummary items={cart.items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutApp;
