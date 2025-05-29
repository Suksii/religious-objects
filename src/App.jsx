import "./App.scss";
import HomePage from "./pages/homePage/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import RegionPage from "./pages/regionPage/RegionPage.jsx";
import ReligiousObject from "./pages/religiousObject/ReligiousObject.jsx";
import FZM from "./assets/FZM.png";
import FZMsmall from "./assets/FZMsmall.jpg";
import { central_data } from "./data/central_data.jsx";
import { south_data } from "./data/south_data.jsx";
import { north_data } from "./data/north_data.jsx";
import { useEffect, useState } from "react";
import FondSection from "./components/fondSection/FondSection.jsx";

function App() {
  const [imageSrc, setImageSrc] = useState(FZMsmall);

  useEffect(() => {
    const updateImage = () => {
      setImageSrc(window.innerWidth > 768 ? FZM : FZMsmall);
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <FondSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sjeverna-regija"
          element={
            <RegionPage
              data={north_data}
              region="sjeverne"
              regionLink="sjeverna-regija"
            />
          }
        />
        <Route
          path="/sjeverna-regija/:object"
          element={
            <ReligiousObject data={north_data} regionLink="sjeverna-regija" />
          }
        />
        <Route
          path="/juzna-regija"
          element={
            <RegionPage
              data={south_data}
              region="južne"
              regionLink="juzna-regija"
            />
          }
        />
        <Route
          path="/juzna-regija/:object"
          element={
            <ReligiousObject data={south_data} regionLink="juzna-regija" />
          }
        />
        <Route
          path="/centralna-regija"
          element={
            <RegionPage
              data={central_data}
              region="centralne"
              regionLink="centralna-regija"
            />
          }
        />
        <Route
          path="/centralna-regija/:object"
          element={
            <ReligiousObject data={central_data} regionLink="centralna-regija" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
