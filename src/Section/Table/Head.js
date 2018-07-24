import React, { Fragment } from "react";

const Toggle = ({ children, onClick }) => <td onClick={onClick}>{children}</td>;

const Head = ({ setSortBy, sortBy, direction, toggleDirection, headers }) => {
  const headersJSX = Object.keys(headers).map((key, index) => {
    const active = key === sortBy;
    return (
      <Fragment key={index}>
        <Toggle
          active={active}
          onClick={() => {
            if (active) toggleDirection();
            setSortBy(key);
          }}
        >
          {headers[key]} {active ? (direction === "asc" ? "▲" : "▼") : null}
        </Toggle>
      </Fragment>
    );
  });

  return (
    <tbody>
      <tr>{headersJSX}</tr>
    </tbody>
  );
};

export default Head;
