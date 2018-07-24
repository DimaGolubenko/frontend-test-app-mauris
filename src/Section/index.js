import React, { Component } from "react";
import { getDataCount } from "../api.js";

import Select from "./Select";
import Table from "./Table";

export default class Section extends Component {
  state = {
    customTableSize: 0
  };

  componentDidMount() {
    this.setState({ customTableSize: getDataCount() });
  }

  handleGetSectionData = size => {
    this.props.onSetSectionData(size);
  };

  handleChangeCustomTableSize = size => {
    const maxSize = getDataCount();
    const isNotValid = isNaN(Number(size)) || Number(size) > maxSize;
    if (isNotValid) return;
    this.setState({ customTableSize: size });
  };

  render() {
    const { isFetched, headers, products } = this.props;
    const { customTableSize } = this.state;

    return (
      <div>
        {!isFetched ? (
          <Select
            onGetSectionData={size => this.handleGetSectionData(size)}
            onChangeSize={size => this.handleChangeCustomTableSize(size)}
            customTableSize={customTableSize}
          />
        ) : (
          <Table headers={headers} products={products} />
        )}
      </div>
    );
  }
}
