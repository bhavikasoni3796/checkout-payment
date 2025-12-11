import React from "react";
import { ShoppingCart } from "lucide-react";

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
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharge = 20;
  const total = subtotal + deliveryCharge;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="w-5 h-5 text-slate-600" />
        <h2 className="text-xl font-semibold text-slate-800">Order Summary</h2>
      </div>

      <div className="space-y-3 mb-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-slate-800">{item.name}</p>
              <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
            </div>
            <span className="font-semibold text-slate-800">
              ₹{(item.price * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-300 pt-4 space-y-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm text-slate-600">
          <span>Delivery Charge</span>
          <span>₹{deliveryCharge.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-300">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
