import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import References from "./components/References";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="page-body">
      <Header />
      <NavBar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <References />
      <Footer />
    </div>
  );
}

export default App;
