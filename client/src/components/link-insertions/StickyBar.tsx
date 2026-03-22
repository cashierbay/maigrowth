import { useState } from "react";
import { X } from "lucide-react";

export default function StickyBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-3"
      style={{ top: 72, backgroundColor: "#FF6B35" }}
    >
      <span className="text-white text-sm font-semibold text-center">
        🔥 Limited Time: Get 15% OFF all packages + Free Strategy Call
      </span>
      <button
        onClick={scrollToPackages}
        className="flex-shrink-0 bg-white text-sm font-bold rounded-full px-4 py-1.5 hover:bg-orange-50 transition-colors"
        style={{ color: "#FF6B35" }}
        data-testid="button-sticky-claim"
      >
        Claim Your Discount
      </button>
      <button
        onClick={() => setDismissed(true)}
        className="flex-shrink-0 text-white opacity-80 hover:opacity-100 transition-opacity ml-1"
        aria-label="Dismiss"
        data-testid="button-sticky-dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
}
