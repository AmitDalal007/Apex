import "./Sass/main.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Call from "./Components/Call";
import Testimony from "./Components/Testimony";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Call />
      <Features />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
