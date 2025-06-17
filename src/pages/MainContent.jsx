import Events from "@/pages/Events";
import Gallery from "@/pages/Gallery";
import Gifts from "@/pages/Gifts";
import Hero from "@/pages/Hero";
import Location from "@/pages/Location";
import Footer from "./Footer";
import ThankYou from "./ThankYou";

// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Hero />
      <Events />
      <Location />
      <Gifts />
      <Gallery />
      <ThankYou />
      <Footer />
    </>
  );
}
