import { Lock } from "lucide-react";
import React from "react";

interface SubmitButtonProps {
  loading: boolean;
  isValid: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading, isValid }) => {
  return (
    <button
      type="submit"
      disabled={!isValid || loading}
      className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all transform ${
        !isValid || loading
          ? "bg-slate-300 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg active:scale-95 cursor-pointer"
      }`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Processing...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <Lock className="w-5 h-5" />
          Pay Now
        </span>
      )}
    </button>
  );
};

export default SubmitButton;
