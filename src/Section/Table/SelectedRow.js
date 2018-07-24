import React from "react";

const SelectedRow = ({ selectedRow }) => {
  const rowJSX = selectedRow
    ? Object.keys(selectedRow).map((key, i) => (
        <td key={i}>{selectedRow[key]}</td>
      ))
    : null;
  return (
    <tbody>
      <tr>{rowJSX}</tr>
    </tbody>
  );
};

export default SelectedRow;
