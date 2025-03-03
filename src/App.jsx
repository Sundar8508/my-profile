import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

const App = () => {
  return (
    <div>
      <Header />
      <About/>
      <Projects/>
      <Certificates/>
      <Contact />
      <Footer />
      
    </div>
  );
};
export default App;
