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
  const [brojPregleda, setBrojPregleda] = useState(0);

  useEffect(() => {
    const updateImage = () => {
      setImageSrc(window.innerWidth > 768 ? FZM : FZMsmall);
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  useEffect(() => {
    const inkrementirajPreglede = async () => {
      try {
        const response = await fetch("https://www.vjerskiobjekticg.com/update_views.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("HTTP greška " + response.status);

        const data = await response.json();
        setBrojPregleda(data.brojPregleda);
      } catch (error) {
        console.error("Greška prilikom slanja zahteva:", error);
      }
    };

    inkrementirajPreglede();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <FondSection />
      {/* <div
        style={{ cursor: "pointer" }}
        onClick={() => window.open("https://fzm.me/v/")}
      >
        <p className="logo_text">
          "Vjerski objekti Crne Gore" je projekat koji se realizuje podrškom
        </p>
        <img src={imageSrc} alt="FZM" style={{ width: "100%" }} />
      </div> */}
      <a
        style={{
          position: "fixed",
          left: "0px",
          bottom: "0",
          padding: "8px",
          fontSize: "14px",
          backgroundColor: "rgba(100,100,100,0.3)",
        }}
      >
        Broj pregleda: <span className="brojPregleda">{brojPregleda}</span>
      </a>
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
          path="/srednja-regija"
          element={
            <RegionPage
              data={central_data}
              region="srednje"
              regionLink="srednja-regija"
            />
          }
        />
        <Route
          path="/srednja-regija/:object"
          element={
            <ReligiousObject data={central_data} regionLink="srednja-regija" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
