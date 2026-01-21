import Services from "../sections/Services";
import Work from "../sections/Work";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import ServicesCard from "../sections/ServicesCard";

function Home() {
  return (
    <>
      <Hero />
      <ServicesCard/>
      <Services />
      <Work />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
