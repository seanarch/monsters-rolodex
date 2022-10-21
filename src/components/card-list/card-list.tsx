import { Monster } from '../../App'; 
import './card-list.styles.css'
import CardComponent from '../card/card'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) =>  (
      <div className="card-list">
        {monsters.map((monster) => {

            return (<CardComponent monster={monster}  />)
        }
        )}
        
      </div>
    );
    


export default CardList;
