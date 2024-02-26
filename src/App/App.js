import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

//Components
import Footer from "../componets/Footer";
import ResponsiveAppBar from "../componets/navbar/muiAppBar";

//Pages
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Projects from "../pages/Project/Projects";

//Projects
import { Portfolio, SeniorDesign } from "../pages/Project/pages";

export default function App() {
  return (
    <HashRouter>
      <div className="main">
        <ResponsiveAppBar />
        <div className="content" style={{ height: "calc(100vh - 68.5px - 46px" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/projects" element={<Projects />} />

            {/* Project Routes */}
            <Route exact path="/projects/seniordesign" element={<SeniorDesign />} />
            <Route exact path="/projects/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}
