import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartSummaryProps {
  items: CartItem[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2>Order Summary</h2>
      </div>
      <div className="space-y-3 mb-4">
        {items.map((item) => (
          <div className="flex justify-between items-center" key={item.id}>
            <div>
              <p className="font-medium text-slate-800">{item.name}</p>
              <p className="font-sm text-slate-500">Qty: {item.quantity}</p>
            </div>
            <span className="font-semibold text-slate-800">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-300 pt-4 space-y-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal</span>
          <span>₹</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Delivery Charge</span>
          <span>₹</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-300">
          <span>Total</span>
          <span>₹</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
