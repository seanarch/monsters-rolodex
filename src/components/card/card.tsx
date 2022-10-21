import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster;
}

const CardComponent = ({monster}: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div>
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default CardComponent;
