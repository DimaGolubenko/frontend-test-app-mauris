import React from "react";

const Body = ({ products, onSelectRow }) =>
  products.map(product => (
    <tbody key={product.id} onClick={() => onSelectRow(product)}>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
      </tr>
    </tbody>
  ));

export default Body;
