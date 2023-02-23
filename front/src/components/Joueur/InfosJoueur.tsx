import { Grid, Typography } from "@mui/material";
import moment from "moment";
import { Joueur } from "../../utils/data";

interface Props {
  joueur: Joueur;
}

export const InfosJoueur = ({ joueur }: Props) => (
  <Grid container spacing={1}>
    <Grid item xs={2}>
      <img src={joueur.photo} />
    </Grid>
    <Grid item xs={10}>
      <Typography variant="body1">
        <strong>Nom complet</strong> : {joueur.prenom} {joueur.nom}
      </Typography>
      <Typography variant="body1">
        <strong>Date de naissance</strong> :{" "}
        {moment(joueur.dateNaissance).format("DD/MM/YYYY")} (
        {moment().diff(moment(joueur.dateNaissance), "years")} ans)
      </Typography>
      <Typography variant="body1">
        <strong>Poste</strong> : {joueur.poste}
      </Typography>
      <Typography variant="body1">
        <strong>Numéro</strong> : #{joueur.numero}
      </Typography>
    </Grid>
  </Grid>
);
