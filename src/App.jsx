import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AudioProvider } from "./context/AudioProvider.jsx";

import Home from "./pages/Home.jsx";
import Musica from "./pages/Musica.jsx";
import FechaHora from "./pages/FechaHora.jsx";
import Botones from "./pages/Botones.jsx";

function App() {
  return(
    <>
      <AudioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/musica" element={<Musica />}></Route>
            <Route path="/fechahora" element={<FechaHora />}></Route>
            <Route path="/botones" element={<Botones />}></Route>
          </Routes>
        </BrowserRouter>
      </AudioProvider>
    </>
  );
}

export default App;