import { Component } from "react";

import "./main.css";

import { countryData } from "../../constants/countryData";

import search from "../../assets/search.png";
import dropArrow from "../../assets/down-arrow.png";

class DropDownCountry extends Component {
  constructor() {
    super();
    this.state = {
      countryStateData: [],
      isHidden: true,
      searchInputValue: "",
    };
    this.countryData = [];
  }

  componentDidMount() {
    this.setState({
      countryStateData: countryData.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      }),
    });
    this.countryData = countryData.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInputValue !== this.state.searchInputValue) {
      this.setState({
        countryStateData: this.countryData.filter((country) =>
          country.name
            .toLowerCase()
            .includes(this.state.searchInputValue.toLowerCase())
        ),
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div
          onClick={() => this.setState({ isHidden: !this.state.isHidden })}
          className="selectBtn"
        >
          <span>Select Country</span>
          <div
            className={this.state.isHidden ? "arrowDrop" : "arrowDrop-rotate"}
          >
            <img src={dropArrow} alt="arrow" />
          </div>
        </div>
        <div className={this.state.isHidden ? "hiddenContent" : "content"}>
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={this.state.searchInputValue}
              onChange={(e) =>
                this.setState({ searchInputValue: e.target.value })
              }
            />
            <img src={search} alt="search" />
          </div>
          <ul className="options">
            {this.state.countryStateData.map((country) => (
              <li key={country.id}>{country.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DropDownCountry;
