import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({ characters, className }) {
  return (
    <div className={className}>
      {characters.map((el) => (
        <Link key={el.id} to={`/detail/${el.id}`} className="card-link">
          <div className="card-container">
            <div className="card">
              <img src={el.image} alt={el.name} />
              <div>
                <h4>{el.name}</h4>
                <p>Last location: {el.location.name}</p>
                <p>Status: {el.status}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}