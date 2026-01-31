import Hero from "@/components/Hero";
import HydraulicMenu from "@/components/HydraulicMenu";
import MeatManifest from "@/components/MeatManifest";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Hero />
      <HydraulicMenu />
      <MeatManifest />
      <ReservationCTA />
      <Footer />
    </main>
  );
}