import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/home/Home";
import About from "./website/about/About";
import Blogs from "./website/blogs/Blogs";
import Connect from "./website/connect/Connect";
import Plans from "./website/plans/Plans";
import Elearning from "./website/elearning/Elearning";
import Ecommece from "./website/ecommerce/Ecommece";
import BlogOverview from "./website/blogs/components/blogoverview/BlogOverview";
import EcomOverview from "./website/ecommerce/components/ecomoverview/EcomOverview";
import Gallery from "./website/gallery/Gallery";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogoverview/:id" element={<BlogOverview />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/elearning" element={<Elearning />} />
          <Route path="/ecommerce" element={<Ecommece />} />
          <Route path="/ecomoverview" element={<EcomOverview />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
