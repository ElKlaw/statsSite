import { getPourcentage } from "./calcul";
import { getListRandomDate, randomInteger, range } from "./random";

const saisonFin = 2023;
const saisonDebut = randomInteger(2010, saisonFin - 1);

export interface Joueur {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  poste: string;
  numero: number;
  photo: string;
}

export const joueur: Joueur = {
  id: 1,
  nom: "Antetokoúnmpo",
  prenom: "Giánnis",
  dateNaissance: new Date(`1994-12-06`),
  poste: "Intérieur",
  numero: 34,
  photo:
    "https://www.basketball-reference.com/req/202106291/images/players/antetgi01.jpg",
};

export const joueur1: Joueur = {
  id: 2,
  nom: "Jokić",
  prenom: "Nikola",
  dateNaissance: new Date(`1995-02-19`),
  poste: "Intérieur",
  numero: 15,
  photo:
    "https://www.basketball-reference.com/req/202106291/images/players/jokicni01.jpg",
};

export const joueur2: Joueur = {
  id: 3,
  nom: "Curry",
  prenom: "Stephen",
  dateNaissance: new Date(`1988-03-14`),
  poste: "Meneur",
  numero: 30,
  photo:
    "https://www.basketball-reference.com/req/202106291/images/players/curryst01.jpg",
};

export const joueur3: Joueur = {
  id: 4,
  nom: "Dončić",
  prenom: "Luka",
  dateNaissance: new Date(`1999-02-28`),
  poste: "Meneur",
  numero: 77,
  photo:
    "https://www.basketball-reference.com/req/202106291/images/players/doncilu01.jpg",
};

export const listeJoueurs = [joueur, joueur1, joueur2, joueur3];

export interface StatsJoueurMatch {
  id: number;
  date: Date;
  saison: number;
  points: number;
  rebondsOffensifs: number;
  rebondsDefensifs: number;
  rebonds: number;
  passes: number;
  perteDeBalle: number;
  interceptions: number;
  contres: number;
  tirs2ptsTentes: number;
  tirs2ptsMarques: number;
  poucentageFG: number;
  tirs3ptsTentes: number;
  tirs3ptsMarques: number;
  poucentage3PT: number;
  lfsTentes: number;
  lfsMarques: number;
  poucentageLF: number;
  tempsDeJeu: number;
}

const saisons = range(saisonDebut, saisonFin);
const getDateDebutSaison = (annee: number) => new Date(`${annee}-09-01`);
const getDateFinSaison = (annee: number) => new Date(`${annee}-05-25`);

const datesMatchs = saisons
  .map((saison) =>
    getListRandomDate(
      10,
      getDateDebutSaison(saison),
      getDateFinSaison(saison)
    ).map((el) => ({ date: el, saison: saison }))
  )
  .reduce((result, value) => [...result, ...value], []);

export const statsJoueurMatch: Array<StatsJoueurMatch> = datesMatchs.map(
  (dateMatch, index) => {
    const tirs2ptsTentes = randomInteger(0, 25);
    const tirs3ptsTentes = randomInteger(0, 10);
    const lfsTentes = randomInteger(0, 15);

    const tirs2ptsMarques = randomInteger(0, tirs2ptsTentes);
    const tirs3ptsMarques = randomInteger(0, tirs3ptsTentes);
    const lfsMarques = randomInteger(0, lfsTentes);

    const points = tirs2ptsMarques * 2 + tirs3ptsMarques * 3 + lfsMarques * 1;

    const rebondsOffensifs = randomInteger(0, 5);
    const rebondsDefensifs = randomInteger(0, 12);

    return {
      id: index,
      date: dateMatch.date,
      saison: dateMatch.saison,
      points: points,
      rebondsOffensifs: rebondsOffensifs,
      rebondsDefensifs: rebondsDefensifs,
      rebonds: rebondsOffensifs + rebondsDefensifs,
      passes: randomInteger(0, 15),
      perteDeBalle: randomInteger(0, 8),
      interceptions: randomInteger(0, 5),
      contres: randomInteger(0, 5),
      tirs2ptsTentes: tirs2ptsTentes,
      tirs2ptsMarques: tirs2ptsMarques,
      poucentageFG: getPourcentage(tirs2ptsMarques, tirs2ptsTentes),
      tirs3ptsTentes: tirs3ptsTentes,
      tirs3ptsMarques: tirs3ptsMarques,
      poucentage3PT: getPourcentage(tirs3ptsMarques, tirs3ptsTentes),
      lfsTentes: lfsTentes,
      lfsMarques: lfsMarques,
      poucentageLF: getPourcentage(lfsMarques, lfsTentes),
      tempsDeJeu: randomInteger(30, 45),
    };
  }
);

export interface StatsSaison {
  year: number;
  equipe: string;
  points: number;
  rebondsOffensifs: number;
  rebondsDefensifs: number;
  passes: number;
  perteDeBalle: number;
  interceptions: number;
  contres: number;
  tirs2ptsTentes: number;
  tirs2ptsMarques: number;
  tirs3ptsTentes: number;
  tirs3ptsMarques: number;
  lfsTentes: number;
  lfsMarques: number;
  tempsDeJeu: number;
}

export const statsSaison: Array<StatsSaison> = saisons.map((saison) => {
  return statsJoueurMatch
    .filter((el) => el.saison === saison)
    .reduce(
      (result, value) => ({
        ...result,
        points: result.points + value.points,
        rebondsOffensifs: result.rebondsOffensifs + value.rebondsOffensifs,
        rebondsDefensifs: result.rebondsDefensifs + value.rebondsDefensifs,
        passes: result.passes + value.passes,
        perteDeBalle: result.perteDeBalle + value.perteDeBalle,
        interceptions: result.interceptions + value.interceptions,
        contres: result.contres + value.contres,
        tirs2ptsTentes: result.tirs2ptsTentes + value.tirs2ptsTentes,
        tirs2ptsMarques: result.tirs2ptsMarques + value.tirs2ptsMarques,
        tirs3ptsTentes: result.tirs3ptsTentes + value.tirs3ptsTentes,
        tirs3ptsMarques: result.tirs3ptsMarques + value.tirs3ptsMarques,
        lfsTentes: result.lfsTentes + value.lfsTentes,
        lfsMarques: result.lfsMarques + value.lfsMarques,
        tempsDeJeu: result.tempsDeJeu + value.tempsDeJeu,
      }),
      {
        year: saison,
        equipe: "LMB",
        points: 0,
        rebondsOffensifs: 0,
        rebondsDefensifs: 0,
        passes: 0,
        perteDeBalle: 0,
        interceptions: 0,
        contres: 0,
        tirs2ptsTentes: 0,
        tirs2ptsMarques: 0,
        tirs3ptsTentes: 0,
        tirs3ptsMarques: 0,
        lfsTentes: 0,
        lfsMarques: 0,
        tempsDeJeu: 0,
      }
    );
});

export const statsSaisonParMatch: Array<StatsSaison> = statsSaison.map(
  (saison) => {
    const nbMatch = statsJoueurMatch.filter(
      (el) => el.saison === saison.year
    ).length;
    return {
      year: saison.year,
      equipe: saison.equipe,
      points: saison.points / nbMatch,
      rebondsOffensifs: saison.rebondsOffensifs / nbMatch,
      rebondsDefensifs: saison.rebondsDefensifs / nbMatch,
      passes: saison.passes / nbMatch,
      perteDeBalle: saison.perteDeBalle / nbMatch,
      interceptions: saison.interceptions / nbMatch,
      contres: saison.contres / nbMatch,
      tirs2ptsTentes: saison.tirs2ptsTentes / nbMatch,
      tirs2ptsMarques: saison.tirs2ptsMarques / nbMatch,
      tirs3ptsTentes: saison.tirs3ptsTentes / nbMatch,
      tirs3ptsMarques: saison.tirs3ptsMarques / nbMatch,
      lfsTentes: saison.lfsTentes / nbMatch,
      lfsMarques: saison.lfsMarques / nbMatch,
      tempsDeJeu: saison.tempsDeJeu / nbMatch,
    };
  }
);

export interface TirsChartData {
  name: string;
  t2rate: number;
  t2reussi: number;
  t3rate: number;
  t3reussi: number;
  lfrate: number;
  lfreussi: number;
}

export const tirsChartData: Array<TirsChartData> = statsSaison.map((stat) => ({
  name: stat.year.toString(),
  t2rate: stat.tirs2ptsTentes - stat.tirs2ptsMarques,
  t2reussi: stat.tirs2ptsMarques,
  t3rate: stat.tirs3ptsTentes - stat.tirs3ptsMarques,
  t3reussi: stat.tirs3ptsMarques,
  lfrate: stat.lfsTentes - stat.lfsMarques,
  lfreussi: stat.lfsMarques,
}));

export const maxRadarLigue = [
  {
    subject: "%2PTS",
    fullMark: 100,
  },
  {
    subject: "%3PTS",
    fullMark: 100,
  },
  {
    subject: "%LF",
    fullMark: 100,
  },
  {
    subject: "REB",
    fullMark: 100,
  },
  {
    subject: "PASSE",
    fullMark: 100,
  },
  {
    subject: "PDB",
    fullMark: 100,
  },
  {
    subject: "INT",
    fullMark: 100,
  },
  {
    subject: "CONTRE",
    fullMark: 100,
  },
];

const getRadarValue = (subjectRadar: string, saison: StatsSaison) => {
  let result = 0;
  switch (subjectRadar) {
    case "%2PTS":
      result = (saison.tirs2ptsMarques / saison.tirs2ptsTentes) * 100;
      break;
    case "%3PTS":
      result = (saison.tirs3ptsMarques / saison.tirs3ptsTentes) * 100;
      break;
    case "%LF":
      result = (saison.lfsMarques / saison.lfsTentes) * 100;
      break;
    case "REB":
      result = saison.rebondsDefensifs + saison.rebondsOffensifs;
      break;
    case "PASSE":
      result = saison.passes;
      break;
    case "PDB":
      result = saison.perteDeBalle;
      break;
    case "INT":
      result = saison.interceptions;
      break;
    case "CONTRE":
      result = saison.contres;
      break;
  }
  return result;
};

export const radarChartData = maxRadarLigue.map((el) => {
  const saisonsRadar = statsSaison.reduce(
    (result, current) => ({
      ...result,
      [current.year]: getRadarValue(el.subject, current),
    }),
    {}
  );
  return {
    ...el,
    ...saisonsRadar,
  };
});
