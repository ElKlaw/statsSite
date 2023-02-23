import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RechercheJoueur } from "./pages/joueurs/RechercheJoueur";
import { ProfilsJoueur } from "./pages/joueurs/ProfilJoueur";
import { MatchsJoueur } from "./pages/joueurs/onglet/MatchsJoueur";
import { SaisonJoueur } from "./pages/joueurs/onglet/SaisonJoueur";
import { GraphiqueJoueur } from "./pages/joueurs/onglet/GraphiqueJoueur";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<RechercheJoueur />} />
        <Route path="recherche-joueurs" element={<RechercheJoueur />} />
        <Route path="joueurs/:id" element={<ProfilsJoueur />}>
          <Route index path="matchs" element={<MatchsJoueur />} />
          <Route index path="saison" element={<SaisonJoueur />} />
          <Route index path="graphique" element={<GraphiqueJoueur />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
