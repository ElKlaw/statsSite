import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { getPourcentage } from "../utils/calcul";
import { statsSaison, StatsSaison, statsSaisonParMatch } from "../utils/data";


interface Props {
}

const enum MENU {
  TOTAL,
  MOYENNE
}

export const TableauSaison = ({} : Props) => {
  const saisonsTotal : Array<StatsSaison> = statsSaison
  const saisonParMatch : Array<StatsSaison> = statsSaisonParMatch
  const [type, setType] = useState(MENU.MOYENNE)
  const saisons = type === MENU.TOTAL ? saisonsTotal : saisonParMatch
  return(
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h2">
          Saisons
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup>
          <Button onClick={() => setType(MENU.MOYENNE)}>MOY</Button>
          <Button onClick={() => setType(MENU.TOTAL)}>TOT</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Équipe</TableCell>
                <TableCell align="right">MIN</TableCell>
                <TableCell align="right">PTS</TableCell>
                <TableCell align="right">REBO</TableCell>
                <TableCell align="right">REBD</TableCell>
                <TableCell align="right">REB</TableCell>
                <TableCell align="right">PDS</TableCell>
                <TableCell align="right">BP</TableCell>
                <TableCell align="right">IPM</TableCell>
                <TableCell align="right">CPM</TableCell>
                <TableCell align="right">TR</TableCell>
                <TableCell align="right">TT</TableCell>
                <TableCell align="right">FG%</TableCell>
                <TableCell align="right">3PR</TableCell>
                <TableCell align="right">3PT</TableCell>
                <TableCell align="right">3P%</TableCell>
                <TableCell align="right">LFR</TableCell>
                <TableCell align="right">LFT</TableCell>
                <TableCell align="right">LF%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {saisons.map((saison) => (
                <TableRow
                  key={saison.year}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {saison.year}
                  </TableCell>
                  <TableCell>{saison.equipe}</TableCell>
                  <TableCell align="right">{saison.tempsDeJeu}</TableCell>
                  <TableCell align="right">{saison.points}</TableCell>
                  <TableCell align="right">{saison.rebondsDefensifs}</TableCell>
                  <TableCell align="right">{saison.rebondsOffensifs}</TableCell>
                  <TableCell align="right">{(saison.rebondsDefensifs + saison.rebondsOffensifs)}</TableCell>
                  <TableCell align="right">{saison.passes}</TableCell>
                  <TableCell align="right">{saison.perteDeBalle}</TableCell>
                  <TableCell align="right">{saison.interceptions}</TableCell>
                  <TableCell align="right">{saison.contres}</TableCell>
                  <TableCell align="right">{saison.tirs2ptsMarques}</TableCell>
                  <TableCell align="right">{saison.tirs2ptsTentes}</TableCell>
                  <TableCell align="right">{getPourcentage(saison.tirs2ptsMarques, saison.tirs2ptsTentes)}</TableCell>
                  <TableCell align="right">{saison.tirs3ptsMarques}</TableCell>
                  <TableCell align="right">{saison.tirs3ptsTentes}</TableCell>
                  <TableCell align="right">{getPourcentage(saison.tirs3ptsMarques, saison.tirs3ptsTentes)}</TableCell>
                  <TableCell align="right">{saison.lfsMarques}</TableCell>
                  <TableCell align="right">{saison.lfsTentes}</TableCell>
                  <TableCell align="right">{getPourcentage(saison.lfsMarques, saison.lfsTentes)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}