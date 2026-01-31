export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-primary pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl font-bold uppercase mb-4">Glück & Grit</h3>
          <p className="font-mono text-sm text-muted-foreground max-w-md">
            Engineered for flavor. Built for satisfaction. A culinary fusion experiment operating within the Dallas metropolitan grid.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-sm font-bold uppercase mb-4 border-b border-primary pb-2 inline-block">Directory</h4>
          <ul className="space-y-2 font-mono text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-accent">Menu Data</a></li>
            <li><a href="#" className="hover:text-accent">Reservations</a></li>
            <li><a href="#" className="hover:text-accent">Events Log</a></li>
            <li><a href="#" className="hover:text-accent">Press Kit</a></li>
          </ul>
        </div>
        
        <div>
           <h4 className="font-mono text-sm font-bold uppercase mb-4 border-b border-primary pb-2 inline-block">Contact</h4>
           <address className="font-mono text-sm text-muted-foreground not-italic space-y-2">
             <p>2024 Industrial Blvd</p>
             <p>Sector 4, Dallas, TX 75207</p>
             <p className="mt-4">Tx: +1 (214) 555-0199</p>
             <p>Fx: +1 (214) 555-0198</p>
           </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-muted-foreground">
        <p>© 2024 GLÜCK & GRIT SYSTEMS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
           <span>INSTAGRAM</span>
           <span>TWITTER (X)</span>
           <span>FACEBOOK</span>
        </div>
      </div>
    </footer>
  );
}