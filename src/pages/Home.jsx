import Services from "../sections/Services";
import Work from "../sections/Work";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
import Hero from "../sections/hero";
import Cards from "../sections/Cards";

function Home() {
  return (
    <>
      <Hero />
      <Cards/>
      <Services />
      <Work />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
