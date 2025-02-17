import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";

function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}

export default Page;
