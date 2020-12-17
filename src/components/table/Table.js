import React from "react";
import numeral from "numeral";
import "./Table.css";

export const Table = ({ countries }) => {
  return (
    <div className="table">
      {/* destructuring country and cases from country object */}
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
