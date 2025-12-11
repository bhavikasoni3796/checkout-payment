import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="tetx-6xl font-bold text-gray-900 mb-4">
          Next.js Checkout
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Next.js-based e-commerce application checkout page
        </p>
        <Link
          href="/checkout"
          className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-700 font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span>Go to checkout</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
          <Lock className="w-4 h-4" />
          <span>Secured with encryption</span>
        </div>
      </div>
    </main>
  );
}
