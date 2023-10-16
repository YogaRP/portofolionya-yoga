import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Sosmed from "./components/Sosmed";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* End Hero Section  */}
        {/* About me */}
        <About />
        {/* End About me */}
        {/* Projek Saya */}
        <Portofolio />
        {/* End Projek Saya */}
        {/* Sosmed Saya */}
        <Sosmed />
        {/* End Sosmed Saya */}
      </main>
      <Footer />
    </>
  );
}

export default App;
