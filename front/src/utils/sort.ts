import moment from "moment";

export const sortByDate = (a: any, b: any) =>
  moment(b.date).diff(moment(a.date));
