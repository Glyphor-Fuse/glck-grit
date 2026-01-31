import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MEATS = [
  { name: "Pork Knuckle (Schweinshaxe)", desc: "Crispy skin, tender meat, served with sauerkraut.", price: "24", tag: "GERMAN" },
  { name: "Texas Brisket", desc: "16-hour hickory smoked, salt & pepper rub.", price: "32/lb", tag: "TEXAS" },
  { name: "Jalapeño Cheddar Wurst", desc: "House-made casing, spicy kick.", price: "18", tag: "HYBRID" },
  { name: "Beef Rib (Dino)", desc: "Massive bone-in rib, rich marbling.", price: "45", tag: "TEXAS" },
  { name: "Schnitzel Verdad", desc: "Chicken fried steak style veal cutlet.", price: "26", tag: "HYBRID" },
  { name: "Pretzel & Queso", desc: "Bavarian lye pretzel with spicy cheese dip.", price: "14", tag: "STARTER" },
];

export default function MeatManifest() {
  return (
    <section className="py-24 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 rounded-none border-primary font-mono text-xs uppercase tracking-widest">
            Section 03: Edibles
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-primary">
            Meat Manifest
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-primary">
          {MEATS.map((item, idx) => (
            <Card key={idx} className="rounded-none border-b border-r border-t-0 border-l-0 border-primary shadow-none bg-transparent hover:bg-muted/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-muted-foreground">ITEM #{String(idx + 1).padStart(3, '0')}</span>
                  <span className="font-mono text-lg font-bold text-accent">${item.price}</span>
                </div>
                <CardTitle className="font-display text-2xl uppercase leading-none">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-sm text-muted-foreground mb-4">
                  {item.desc}
                </p>
                <Badge className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-[10px]">
                  {item.tag}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}