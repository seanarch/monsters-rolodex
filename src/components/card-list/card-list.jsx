 
import './card-list.styles.css'
import CardComponent from '../card/card'


const CardList = ({monsters}) =>  (
      <div className="card-list">
        {monsters.map((monster) => {

            return (<CardComponent monster={monster}  />)
        }
        )}
        
      </div>
    );


export default CardList;
