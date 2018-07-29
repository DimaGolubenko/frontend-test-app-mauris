import React from "react";

const SelectedRow = ({ selectedRow }) => {
  const rowJSX = selectedRow
    ? Object.keys(selectedRow).map((key, i) => (
        <td key={i}>{selectedRow[key]}</td>
      ))
    : null;
  return (
    <tbody>
      <tr className="table__selected-row">{rowJSX}</tr>
    </tbody>
  );
};

export default SelectedRow;
