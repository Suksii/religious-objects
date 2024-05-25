import './Card.scss';
import {Link} from "react-router-dom";

const Card = ({ title, image, description, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link}>Saznaj više</Link>
        </div>
    );
}

export default Card;