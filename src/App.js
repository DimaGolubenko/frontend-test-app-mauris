import React, { Component } from "react";
import { getTableData } from "./api";

import "./App.css";
import Section from "./Section";

class App extends Component {
  state = {
    sections: []
  };

  componentDidMount() {
    const { headers, products } = getTableData();
    this.setState({
      sections: [
        {
          isFetched: false,
          headers: headers,
          products: products
        }
      ]
    });
  }

  addSection = () => {
    const newSectionsData = [
      ...this.state.sections,
      { isFetched: false, headers: [], products: [] }
    ];
    this.setState({ sections: newSectionsData });
  };

  handleSectionData = size => {
    const { headers, products } = getTableData(size);
    const sectionData = { isFetched: true, headers, products };
    const newSectionsData = [...this.state.sections.slice(0, -1), sectionData];
    this.setState({ sections: newSectionsData });
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="app">
        <div className="add-data">
          <button className="add-data__btn" onClick={this.addSection}>
            Добавить набор
          </button>
        </div>
        {sections.map((section, index) => (
          <Section
            key={index}
            isFetched={section.isFetched}
            headers={section.headers}
            products={section.products}
            onSetSectionData={size => this.handleSectionData(size)}
          />
        ))}
      </div>
    );
  }
}

export default App;
