import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import LunchDeal from "@/components/LunchDeal";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import SocialFeed from "@/components/SocialFeed";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <LunchDeal />
        <About />
        <Reviews />
        <SocialFeed />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
