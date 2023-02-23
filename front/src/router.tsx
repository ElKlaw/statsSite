import { createBrowserRouter } from "react-router-dom";
import { ProfilsJoueur } from "./pages/joueurs/ProfilJoueur";
import { RechercheJoueur } from "./pages/RechercheJoueur";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RechercheJoueur />,
    children: [
      {
        path: "joueurs",
        element: <RechercheJoueur />,
        children: [
          {
            path: "",
            index: true,
            element: <RechercheJoueur />,
          },
          {
            path: ":id",
            element: <ProfilsJoueur />,
          },
        ],
      },
    ],
  },
]);
