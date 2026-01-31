import { Separator } from "@/components/ui/separator";

export default function TechSpecs() {
  return (
    <section className="py-24 bg-[#f4f4f0] text-slate-900 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: The Manifesto Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-orange-600 font-mono text-sm tracking-widest uppercase mb-4">
              Mission Statement
            </h3>
            <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-[0.9]">
              ENGINEERED<br />APPETITE.
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                We do not "cook." We process organic matter through heat and time vectors. 
                Glück & Grit was founded on a simple contradiction: the belief that the chaotic 
                soul of Texas BBQ can be tamed by the rigid discipline of German engineering.
              </p>
              <p>
                Our smokers are custom-fabricated from decommissioned oil pipelines. 
                Our recipes are version-controlled. Our beer is brewed according to the 
                Reinheitsgebot, but served in a frosted mug that violates several international treaties.
              </p>
            </div>
          </div>

          {/* Right: Technical Spec Sheet */}
          <div className="bg-white border-2 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-8 border-b-2 border-slate-900 pb-4">
              <h4 className="font-bold text-xl uppercase tracking-tight">Facility Specs</h4>
              <span className="font-mono text-xs bg-slate-900 text-white px-2 py-1">REV 3.2</span>
            </div>

            <dl className="space-y-4 font-mono text-sm">
              <div className="grid grid-cols-2 py-2 border-b border-slate-200">
                <dt className="text-slate-500">SMOKER_TYPE</dt>
                <dd className="text-right font-bold">OFFSET FLOW 5000</dd>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-slate-200">
                <dt className="text-slate-500">FUEL_SOURCE</dt>
                <dd className="text-right font-bold">AGED POST OAK</dd>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-slate-200">
                <dt className="text-slate-500">BEER_TAPS</dt>
                <dd className="text-right font-bold">24 HYDRAULIC</dd>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-slate-200">
                <dt className="text-slate-500">SEATING_CAP</dt>
                <dd className="text-right font-bold">150 UNITS</dd>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-slate-200">
                <dt className="text-slate-500">VIBE_INDEX</dt>
                <dd className="text-right font-bold text-orange-600">CRITICAL MASS</dd>
              </div>
            </dl>
            
            <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-300">
              <img 
                src="https://raw.githubusercontent.com/Glyphor-Fuse/glck-grit/main/public/images/tech-schematic.png" 
                alt="Smoker Schematic" 
                className="w-full opacity-80 mix-blend-multiply" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
