import { useEffect, useState } from "react";

export default function MeatTicker() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    "BRISKET: LOW STOCK (12 LBS)",
    "RIBS: AVAILABLE",
    "SAUSAGE: CRITICAL (3 LBS)",
    "BEER: FLOW OPTIMAL",
    "PIT TEMP: 225°F STABLE",
    "NEXT BATCH: 14:00 CST"
  ];

  return (
    <div className="bg-black text-signal-orange py-3 overflow-hidden border-b-2 border-ochre font-mono text-sm uppercase tracking-widest whitespace-nowrap relative">
       <div className="animate-infinite-scroll inline-block">
         {tickerItems.map((item, i) => (
           <span key={i} className="mx-8">
             /// {item}
           </span>
         ))}
         {tickerItems.map((item, i) => (
           <span key={`dup-${i}`} className="mx-8">
             /// {item}
           </span>
         ))}
       </div>
    </div>
  );
}
