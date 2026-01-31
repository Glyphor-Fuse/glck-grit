import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const PARTS = [
  { id: 1, name: "BRISKET (DAS BRUSTSTÜCK)", temp: "203°F", status: "READY", grid: "col-start-2 row-start-2" },
  { id: 2, name: "RIBS (RIPPCHEN)", temp: "195°F", status: "SMOKING", grid: "col-start-3 row-start-2" },
  { id: 3, name: "SAUSAGE (WURST)", temp: "165°F", status: "READY", grid: "col-start-2 row-start-3" },
  { id: 4, name: "SHOULDER (SCHULTER)", temp: "200°F", status: "RESTING", grid: "col-start-3 row-start-3" },
];

export default function HydraulicMenu() {
  const [activePart, setActivePart] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-secondary/10 border-b-2 border-primary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-2 border-primary pb-4">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-primary">
              Hydraulic Menu
            </h2>
            <p className="font-mono text-sm text-muted-foreground mt-2">
              // INTERACTIVE SMOKER SCHEMATIC V.2.1
            </p>
          </div>
          <div className="font-mono text-xs border border-primary px-2 py-1 mt-4 md:mt-0">
            SYSTEM STATUS: ONLINE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Interactive Schematic */}
          <div className="relative aspect-square border-2 border-primary bg-neutral-900 p-1 group">
             {/* Background Image simulates the blueprint */}
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/glck-grit/main/public/images/smoker-blueprint.jpg" 
              alt="Smoker Blueprint"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            
            {/* Grid Overlay for Interaction */}
            <div className="relative z-10 w-full h-full grid grid-cols-4 grid-rows-4 gap-1">
              {PARTS.map((part) => (
                <motion.button
                  key={part.id}
                  className={`${part.grid} border border-accent/30 hover:border-accent hover:bg-accent/20 transition-all flex items-center justify-center relative`}
                  onMouseEnter={() => setActivePart(part.id)}
                  onMouseLeave={() => setActivePart(null)}
                  whileHover={{ scale: 0.98 }}
                >
                  <span className="sr-only">{part.name}</span>
                  {activePart === part.id && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-accent animate-pulse rounded-full" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Decor Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-primary/20 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 pointer-events-none" />
          </div>

          {/* Readout Panel */}
          <div className="border-2 border-primary h-full p-6 flex flex-col justify-between bg-background">
            <div className="space-y-6">
              <div className="border-b border-primary pb-2 flex justify-between items-center">
                <span className="font-mono font-bold">COMPONENT DETAILS</span>
                <div className="h-2 w-2 bg-primary animate-pulse" />
              </div>

              {activePart ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <h3 className="font-display text-3xl text-primary uppercase">
                    {PARTS.find(p => p.id === activePart)?.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                    <div className="bg-muted p-2 border border-primary/20">
                      <span className="block text-[10px] text-muted-foreground">INTERNAL TEMP</span>
                      {PARTS.find(p => p.id === activePart)?.temp}
                    </div>
                    <div className="bg-muted p-2 border border-primary/20">
                      <span className="block text-[10px] text-muted-foreground">CURRENT STATUS</span>
                      {PARTS.find(p => p.id === activePart)?.status}
                    </div>
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                    Specimen currently undergoing hickory fumigation process. Fat rendering within optimal parameters. Bark formation nominal.
                  </p>
                </div>
              ) : (
                <div className="h-40 flex items-center justify-center text-muted-foreground font-mono text-xs">
                  [HOVER OVER SCHEMATIC ZONES TO INITIATE DATA STREAM]
                </div>
              )}
            </div>

            <div className="mt-8">
               <h4 className="font-mono text-xs font-bold mb-4 border-b border-dashed border-primary/50 pb-2">
                 INVENTORY LOG
               </h4>
               <ul className="space-y-2 font-mono text-sm">
                 {PARTS.map((p) => (
                   <li key={p.id} className={`flex justify-between ${activePart === p.id ? "text-accent" : ""}`}>
                     <span>{p.id.toString().padStart(2, '0')} // {p.name.split(' (')[0]}</span>
                     <Badge variant="outline" className="rounded-none text-[10px] h-5 border-primary">{p.status}</Badge>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}