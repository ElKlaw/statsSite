import { Grid, Typography } from "@mui/material";
import { percent, px, rem } from "csx";
import moment from "moment";
import { Fragment } from "react";
import { style } from "typestyle";
import { statsJoueurMatch, StatsJoueurMatch } from "../utils/data";
import { groupByYearAndMonth } from "../utils/group";
import { sortByDate } from "../utils/sort";

const table = style({
  width: percent(100),
});

const headerTable = style({
  backgroundColor: "#9e9e9e",
  color: "#FFF",
  height: px(26),
  textAlign: "center",
});

const cellHeader = style({
  paddingLeft: px(10),
  paddingTop: px(7),
  paddingBottom: px(7),
  fontWeight: 400,
});

const cellBody = style({
  fontWeight: 400,
  textAlign: "center",
  borderBottom: "1px solid rgba(224, 224, 224, 1)",
  padding: "6px 16px",
  fontSize: rem(0.875),
});

const moisLigne = style({
  backgroundColor: "#dadada",
  color: "#444",
});

export const TableauMatch = () => {
  const statsGroupByDate = groupByYearAndMonth(
    statsJoueurMatch.sort(sortByDate)
  );
  const keys = Array.from(statsGroupByDate);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <table className={table} cellSpacing={0}>
          <thead className={headerTable}>
            <tr>
              <th className={cellHeader}></th>
              <th className={cellHeader}>MIN</th>
              <th className={cellHeader}>PTS</th>
              <th className={cellHeader}>REBO</th>
              <th className={cellHeader}>REBD</th>
              <th className={cellHeader}>REB</th>
              <th className={cellHeader}>PDS</th>
              <th className={cellHeader}>BP</th>
              <th className={cellHeader}>IPM</th>
              <th className={cellHeader}>CPM</th>
              <th className={cellHeader}>TR</th>
              <th className={cellHeader}>TT</th>
              <th className={cellHeader}>FG%</th>
              <th className={cellHeader}>3PR</th>
              <th className={cellHeader}>3PT</th>
              <th className={cellHeader}>3P%</th>
              <th className={cellHeader}>LFR</th>
              <th className={cellHeader}>LFT</th>
              <th className={cellHeader}>LF%</th>
            </tr>
          </thead>
          <tbody>
            {keys.length > 0 ? (
              keys.map(([key, values]: [string, Array<StatsJoueurMatch>]) => (
                <Fragment key={key}>
                  <tr className={moisLigne}>
                    <td colSpan={19} className={cellHeader}>
                      {key}
                    </td>
                  </tr>
                  {values.map((match: StatsJoueurMatch) => (
                    <tr key={match.id}>
                      <td className={cellBody}>
                        {moment(match.date).format("DD/MM/YYYY")}
                      </td>
                      <td className={cellBody}>{match.tempsDeJeu}</td>
                      <td className={cellBody}>{match.points}</td>
                      <td className={cellBody}>{match.rebondsOffensifs}</td>
                      <td className={cellBody}>{match.rebondsDefensifs}</td>
                      <td className={cellBody}>{match.rebonds}</td>
                      <td className={cellBody}>{match.passes}</td>
                      <td className={cellBody}>{match.perteDeBalle}</td>
                      <td className={cellBody}>{match.interceptions}</td>
                      <td className={cellBody}>{match.contres}</td>
                      <td className={cellBody}>{match.tirs2ptsMarques}</td>
                      <td className={cellBody}>{match.tirs2ptsTentes}</td>
                      <td className={cellBody}>
                        {match.poucentageFG.toFixed(1)}
                      </td>
                      <td className={cellBody}>{match.tirs3ptsMarques}</td>
                      <td className={cellBody}>{match.tirs3ptsTentes}</td>
                      <td className={cellBody}>
                        {match.poucentage3PT.toFixed(1)}
                      </td>
                      <td className={cellBody}>{match.lfsMarques}</td>
                      <td className={cellBody}>{match.lfsTentes}</td>
                      <td className={cellBody}>
                        {match.poucentageLF.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={6} className={cellHeader}>
                  Aucun match
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};
