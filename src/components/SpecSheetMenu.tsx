import { Separator } from "@/components/ui/separator";

const menuCategories = [
  {
    title: "Smoked Proteins",
    code: "SEC-01",
    items: [
      { id: "A1", name: "Prime Brisket", desc: "16hr Hickory Smoke / Salt & Pepper Rub", price: "34.00", unit: "PER LB" },
      { id: "A2", name: "Jalapeño Cheddar Link", desc: "House Grind / Natural Casing", price: "8.50", unit: "PER LINK" },
      { id: "A3", name: "Pork Ribs (Spare)", desc: "Dry Rub / Vinegar Mop", price: "22.00", unit: "HALF RACK" },
      { id: "A4", name: "Turkey Breast", desc: "Butter Injection / Black Pepper", price: "26.00", unit: "PER LB" },
    ]
  },
  {
    title: "Accompaniments",
    code: "SEC-02",
    items: [
      { id: "B1", name: "Potato Salad", desc: "Mustard Base / Dill / Egg", price: "6.00", unit: "PINT" },
      { id: "B2", name: "Pinto Beans", desc: "Brisket Trimmings / Cumin", price: "6.00", unit: "PINT" },
      { id: "B3", name: "Sauerkraut", desc: "House Ferment / Caraway", price: "5.00", unit: "CUP" },
      { id: "B4", name: "White Bread", desc: "Classic Texas Slice", price: "0.00", unit: "STACK" },
    ]
  }
];

export default function SpecSheetMenu() {
  return (
    <section className="py-24 bg-white px-4 border-b-4 border-black">
      <div className="max-w-5xl mx-auto border-2 border-black p-1">
        {/* Header Block */}
        <div className="bg-black text-white p-6 flex justify-between items-start mb-1">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-wider">Component Specifications</h2>
            <p className="font-mono text-sm text-gray-400 mt-1">Ref: Daily Menu Rotation // Date: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="hidden md:block text-right">
             <img src="https://raw.githubusercontent.com/Glyphor-Fuse/glck-grit/main/public/images/qr-code-placeholder.png" alt="QR" className="w-16 h-16 bg-white p-1" />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-1 bg-black">
          {menuCategories.map((cat) => (
            <div key={cat.code} className="bg-white p-6 min-h-[400px]">
              <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
                <h3 className="text-xl font-bold uppercase">{cat.title}</h3>
                <span className="font-mono text-xs bg-ochre px-2 py-1 text-white">{cat.code}</span>
              </div>
              
              <div className="space-y-6">
                {cat.items.map((item) => (
                  <div key={item.id} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-gray-400 w-6">{item.id}</span>
                        <span className="font-bold text-lg uppercase group-hover:text-signal-orange transition-colors">{item.name}</span>
                      </div>
                      <div className="flex-grow border-b border-dotted border-gray-400 mx-3 relative top-[-4px]"></div>
                      <span className="font-mono font-bold">{item.price}</span>
                    </div>
                    <div className="flex justify-between pl-9">
                      <span className="text-sm text-gray-600 font-medium">{item.desc}</span>
                      <span className="text-[10px] uppercase text-gray-400 tracking-wider">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer of Card */}
              <div className="mt-12 pt-4 border-t border-gray-200">
                <p className="font-mono text-[10px] text-gray-400 uppercase text-center">
                  * All weights pre-cooked. Subject to variance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
