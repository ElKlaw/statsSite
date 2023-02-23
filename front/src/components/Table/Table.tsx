import * as React from "react";
import moment from "moment";
import { useEffect, useState } from "react";

interface Columns {
  nom: string;
  accessor: string;
}
interface Props {
  columns: Array<Columns>;
  rows: Array<any>;
}

export default function TableCustom({ columns, rows }: Props) {
  const [rowsSorted, setRowsSorted] = useState(rows);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
  };

  useEffect(() => {
    if (sortField) {
      const sorted = [...rows].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "fr", {
            numeric: true,
          }) * (order === "asc" ? 1 : -1)
        );
      });
      setRowsSorted(sorted);
    }
  }, [order, sortField]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              onClick={() => handleSortingChange(column.accessor)}
              style={{ backgroundColor: "#006bb6" }}
            >
              {column.nom}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsSorted.map((row) => (
          <tr>
            {columns.map((column) => {
              const data =
                row[column.accessor] !== undefined
                  ? row[column.accessor] instanceof Date
                    ? moment(row[column.accessor]).format("DD/MM/YYYY")
                    : row[column.accessor]
                  : "NA";
              return <td>{data}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
