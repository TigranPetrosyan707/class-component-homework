import "./main.css";

import { Component } from "react";

import { heroData } from "../../constants/heroData";
import HeroCard from "./heroCard";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      heroData: heroData,
      isHidden: true,
    };
  }

  reportShower = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };

  closedCardCount = (cardID) => {
    this.setState({
      heroData: this.state.heroData.map((hero) => {
        if (hero.id === cardID) {
          hero.closedCount++;
          return hero;
        }
        return hero;
      }),
    });
  };

  render() {
    const {
      state: { heroData },
    } = this;
    return (
      <>
        <div className="container">
          {heroData.map((hero) => (
            <HeroCard
              key={hero.id}
              {...hero}
              closedCardCount={this.closedCardCount}
            />
          ))}
          <button className="reportBtn" onClick={this.reportShower}>
            Get report
          </button>
        </div>
        <div
          className={`${this.state.isHidden ? "inactive" : "reportSection"} `}
        >
          <h2>Report about heros</h2>
          <div className="reportInformation">
            {this.state.heroData.map((hero) => {
              return (
                <div key={hero.id} className="heroReport">
                  <p>
                    <span>{hero.heroName}</span> has been closed{" "}
                    <span>{hero.closedCount} </span> times
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Wrapper;
