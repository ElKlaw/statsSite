import React from "react";
import { Container, Grid, Tab, Tabs } from "@mui/material";
import { listeJoueurs } from "../../utils/data";
import { InfosJoueur } from "../../components/Joueur/InfosJoueur";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { FlecheHome } from "../../components/Navigation/Arrow";

export const ProfilsJoueur = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const joueur = listeJoueurs[id ? Number(id) - 1 : 0];

  const menu = pathname.split("/").pop();

  const changeMenu = (event: React.ChangeEvent<{}>, newValue: string) => {
    navigate(`/joueurs/${joueur.id}/${newValue}`);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FlecheHome />
        </Grid>
        <Grid item xs={12}>
          <InfosJoueur joueur={joueur} />
        </Grid>
        <Grid item xs={12}>
          <Tabs value={menu} onChange={changeMenu} centered>
            <Tab label="Matchs" value="matchs" />
            <Tab label="Saison" value="saison" />
            <Tab label="Graphique" value="graphique" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <Outlet context={joueur} />
        </Grid>
      </Grid>
    </Container>
  );
};
