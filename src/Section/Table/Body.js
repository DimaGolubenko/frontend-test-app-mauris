import React from "react";

const Body = ({ products, onSelectRow }) =>
  products.map(product => (
    <tbody key={product.id} onClick={() => onSelectRow(product)}>
      <tr>
        <td className="table-cell">{product.id}</td>
        <td className="table-cell">{product.name}</td>
        <td className="table-cell">{product.price}</td>
        <td className="table-cell">{product.quantity}</td>
      </tr>
    </tbody>
  ));

export default Body;
