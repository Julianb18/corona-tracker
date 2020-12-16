import React from "react";
import "./Table.css";

export const Table = ({ countries }) => {
  return (
    <div className="table">
      {/* destructuring country and cases from country object */}
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
