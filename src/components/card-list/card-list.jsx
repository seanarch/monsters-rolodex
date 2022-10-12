import { Component } from "react";
import './card-list.styles.css'
import CardComponent from '../card/card'


class CardList extends Component {
  render() {
    // console.log('render from cardlist');
    console.log(this.props.monsters);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {

            return (<CardComponent monster={monster}  />)
        }
        )}
        
      </div>
    );
  }
}

export default CardList;
