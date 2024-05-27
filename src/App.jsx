import './App.scss'
import HomePage from "./pages/homePage/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import RegionPage from "./pages/regionPage/RegionPage.jsx";
import ReligiousObject from "./pages/religiousObject/ReligiousObject.jsx";
import FZM from "./assets/FZM.png";
import {central_data} from "./data/central_data.jsx";
import {south_data} from "./data/south_data.jsx";
import {north_data} from "./data/north_data.jsx";

function App() {

  return (
    <>
        <div style={{position:'relative'}}>
            <p className="logo_text">Podržano od </p>
            <img src={FZM} alt="FZM" style={{width: '100%'}} />
        </div>

        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/sjeverna-regija" element={<RegionPage data={north_data} region="sjeverne" regionLink="sjeverna-regija"/>} />
            <Route path="/sjeverna-regija/:object" element={<ReligiousObject data={north_data} regionLink="sjeverna-regija"/>} />
            <Route path="/juzna-regija" element={<RegionPage data={south_data} region="južne" regionLink="juzna-regija"/>} />
            <Route path="/juzna-regija/:object" element={<ReligiousObject data={south_data} regionLink="juzna-regija"/>} />
            <Route path="/srednja-regija" element={<RegionPage data={central_data} region="centralne" regionLink="srednja-regija"/>} />
            <Route path="/srednja-regija/:object" element={<ReligiousObject data={central_data} regionLink="srednja-regija"/>} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App
