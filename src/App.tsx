import About from "./components/About";
import Hero from "./components/Hero";
import Career from "./components/Career";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import config from "./config";

function App() {
  const content = config.es;
  return (
    <>
      <Hero content={content.header} />
      <About content={content.about} />
      <Career content={content.career} />
      <Showcase content={content.portfolio} />
      <Footer content={content.footer} />
    </>
  );
}

export default App;
