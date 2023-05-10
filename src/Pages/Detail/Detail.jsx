import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './Detail.css'


export default function Detail () {
  const { id } = useParams();
  const [ detail, setDetail] = useState([]);
  
  const fetchDetail = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            setDetail(data);
        })
        .catch(error => console.log(error));
  };
  
  useEffect(() => {
    fetchDetail(id);
  }, [id]);

  const cardStyle = {
    backgroundColor: (() => {
      switch (detail.status) {
        case "Alive":
          return "#80F280";
        case "Dead":
          return "#8C030E";
        default:
          return "#A8AFB1";
      }
    })()
  };

  return (
    <div className="detail" style={cardStyle}>
      <img src={detail.image}></img>
      <h5>{detail.name}</h5>
      <p>Id: {id}</p>
      <p>State: {detail.status}</p>
      <p>Gender: {detail.gender}</p>
      {detail.location && <p>Location: {detail.location.name}</p>}
      <p>Species: {detail.species}</p>
    </div>
  );
}
