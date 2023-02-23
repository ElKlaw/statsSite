import { Grid } from "@mui/material";
import { PlayerRadarChart } from "../../../components/PlayerRadarChart";
import { TirsChart } from "../../../components/TirsChart";
import { radarChartData, tirsChartData } from "../../../utils/data";

export const GraphiqueJoueur = () => (
  <Grid container>
    <Grid item xs={12}>
      <TirsChart data={tirsChartData} />
    </Grid>
    <Grid item xs={12}>
      <PlayerRadarChart data={radarChartData} />
    </Grid>
  </Grid>
);
