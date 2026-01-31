import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ReservationCTA() {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center border-2 border-primary-foreground/20 p-8 md:p-16 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-10 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6">
            Commence Intake Protocol
          </h2>
          <p className="font-mono text-sm md:text-base text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Reservations highly recommended for parties greater than 4 units. Walk-ins subject to capacity limitations and wait-list algorithms.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
             <Input 
               type="email" 
               placeholder="ENTER_EMAIL_ID" 
               className="rounded-none bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-12 font-mono focus-visible:ring-accent"
             />
             <Button className="rounded-none h-12 bg-accent text-white hover:bg-accent/90 font-mono uppercase tracking-widest px-8">
               Confirm
             </Button>
          </form>
          
          <div className="mt-8 flex justify-center gap-8 font-mono text-xs text-primary-foreground/50">
            <span>LOC: DALLAS_ARTS_DIST</span>
            <span>FREQ: 1100-2200 HRS</span>
          </div>
        </div>
      </div>
    </section>
  );
}