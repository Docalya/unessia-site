import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Securite from "./components/Securite";
import APropos from "./components/APropos";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Securite />
        <APropos />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
