import moment from "moment";

export const groupByYearAndMonth = (
  values: Array<any>
): Map<string, Array<any>> => {
  let map = new Map();
  values.forEach((value) => {
    const year = moment(value.date, "YYYY-MM-DD").format("MMMM YYYY");
    if (map.get(year)) {
      let list = map.get(year);
      list.push(value);
      map.set(year, list);
    } else {
      let list = [];
      list.push(value);
      map.set(year, list);
    }
  });
  return map;
};
