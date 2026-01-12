import Services from "../sections/Services";
import Work from "../sections/Work";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
