import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./websites/error/Error";
import Navbar from "./websites/navbar/Navbar";
import Footer from "./websites/footer/Footer";

const App = () => {
  return (
    <div className="App relative">
      <Router>
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
