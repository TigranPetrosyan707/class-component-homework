import { Component } from "react";
import "./main.css";
class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: false,
    };
  }

  closeCard = (heroID) => {
    this.setState({
      isClosed: true,
    });
    this.props.closedCardCount(heroID);
  };

  openCard = () => {
    this.setState({
      isClosed: false,
    });
  };

  render() {
    const { ...hero } = this.props;
    return !this.state.isClosed ? (
      <div className="card">
        <div className="cardImage">
          <img src={hero.imgURL} className="cardImageInner" />
        </div>
        <h3 className="cardName">{hero.heroName}</h3>
        <button className="closeBtn" onClick={() => this.closeCard(hero.id)}>
          X
        </button>
      </div>
    ) : (
      <div className="closedCard">
        <div className="closedCardButton">
          <button onClick={this.openCard}>show</button>
        </div>
      </div>
    );
  }
}

export default HeroCard;
