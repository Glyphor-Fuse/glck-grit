import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-background border-b-2 border-primary overflow-hidden flex flex-col lg:flex-row">
      {/* Left: Manifesto / Control Panel */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center border-r-2 border-primary relative z-10 bg-background/95">
        <div className="absolute top-4 left-4 text-xs font-mono text-muted-foreground border border-muted-foreground px-2 py-1">
          FIG 1.0: INTRO_SEQ
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-6xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tighter mb-8 text-primary"
        >
          Glück <br />
          <span className="text-secondary">&</span> Grit
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-sm lg:text-base mb-8 max-w-md border-l-4 border-accent pl-4 text-primary/80"
        >
          // OPERATIONAL PARAMETERS:<br/>
          TEUTONIC PRECISION MEETS TEXAS SOUL.<br/>
          WE PAIR THE CLINICAL GRID OF VINTAGE BRAUN MANUALS WITH THE RAW TEXTURE OF HICKORY SMOKE.
        </motion.p>

        <div className="flex gap-4">
          <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono border-2 border-transparent h-12 px-8 uppercase tracking-widest">
            Initiate Intake
          </Button>
          <Button variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-white font-mono h-12 px-8 uppercase tracking-widest">
            View Schematics
          </Button>
        </div>

        {/* Technical Decor */}
        <div className="mt-12 grid grid-cols-3 gap-2 font-mono text-[10px] text-muted-foreground opacity-60">
          <div className="border border-current p-1">
            TMP: 225°F<br/>STABLE
          </div>
          <div className="border border-current p-1">
            HUM: 45%<br/>NOMINAL
          </div>
          <div className="border border-current p-1">
            SMK: HICKORY<br/>DENSE
          </div>
        </div>
      </div>

      {/* Right: Visual */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto bg-neutral-900">
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/glck-grit/main/public/images/hero-meat.jpg" 
          alt="Precision Smoked Brisket"
          className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 pointer-events-none"></div>
        
        {/* Overlay Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
          <div className="border-r border-white/10 h-full"></div>
          <div className="border-r border-white/10 h-full"></div>
          <div className="border-r border-white/10 h-full"></div>
        </div>

        <div className="absolute bottom-8 right-8 bg-accent text-white font-mono text-xs px-4 py-2 rotate-0 lg:-rotate-90 origin-bottom-right">
          EST. 2024 // SECTOR 7G
        </div>
      </div>
    </section>
  );
}