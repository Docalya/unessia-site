import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefices from "./components/Benefices";
import Features from "./components/Features";
import PointSerenite from "./components/PointSerenite";
import Univers from "./components/Univers";
import EspacePro from "./components/EspacePro";
import Securite from "./components/Securite";
import Forfaits from "./components/Forfaits";
import APropos from "./components/APropos";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    // reducedMotion="user" : les animations framer-motion s'arrêtent quand
    // l'appareil demande moins de mouvement (la règle CSS ne les couvrait pas).
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream text-ink">
        <Header />
        <main>
          <Hero />
          <Benefices />
          <Features />
          <PointSerenite />
          <Univers />
          <EspacePro />
          <Securite />
          <Forfaits />
          <APropos />
          <CTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
