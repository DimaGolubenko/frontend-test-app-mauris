import React, { Component } from "react";
import Datasort from "react-data-sort";

import Search from "./Search";
import Head from "./Head";
import Body from "./Body";
import SelectedRow from "./SelectedRow";
import Navigation from "./Navigation";

export default class Table extends Component {
  state = {
    sortBy: "id",
    direction: "asc",
    activePage: 0,
    searchQuery: "",
    itemsPerPage: 10,
    selectedRow: null
  };

  setSortBy = sortBy => {
    this.setState({ sortBy });
  };

  toggleDirection = () => {
    this.setState({
      direction: this.state.direction === "asc" ? "desc" : "asc"
    });
  };

  goToPage = activePage => {
    this.setState({ activePage });
  };

  prevPage = () => {
    this.setState(({ activePage }) => ({
      activePage: activePage - 1
    }));
  };

  nextPage = () => {
    this.setState(({ activePage }) => ({
      activePage: activePage + 1
    }));
  };

  handleSearchQuery = query => {
    this.setState({ searchQuery: query });
  };

  handleSelectRow = product => {
    this.setState({ selectedRow: product });
  };

  render() {
    const {
      sortBy,
      direction,
      activePage,
      itemsPerPage,
      searchQuery,
      selectedRow
    } = this.state;
    const { headers, products } = this.props;

    return (
      <Datasort
        data={products}
        sortBy={sortBy}
        direction={direction}
        activePage={activePage}
        searchQuery={searchQuery}
        paginate
        itemsPerPage={itemsPerPage}
        render={({ data, pages }) => (
          <div>
            <Search
              searchQuery={searchQuery}
              onSearchQuery={query => this.handleSearchQuery(query)}
            />
            <table>
              <Head
                setSortBy={this.setSortBy}
                sortBy={sortBy}
                direction={direction}
                toggleDirection={this.toggleDirection}
                headers={headers}
              />
              <Body
                products={data}
                onSelectRow={product => this.handleSelectRow(product)}
              />
              <SelectedRow selectedRow={selectedRow} />
            </table>
            <PageIndicator pages={pages} activePage={activePage} />
            <Navigation
              activePage={activePage}
              goToPage={this.goToPage}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
              pages={pages}
            />
          </div>
        )}
      />
    );
  }
}

const PageIndicator = ({ pages, activePage }) => (
  <div>
    <b>{activePage + 1}</b> / {pages}
  </div>
);
