import "./Card.css";
import { useState } from "react";

export function Card(props) {
  const user = props.user;

  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavoriteButtonClick() {
    setIsFavorite(!isFavorite)
  }



  return (
    <div className="card">
      <img src={user.picture.medium} width="70%" />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>{user.location.country}</p>
      <p>{user.dob.age} years</p>
      <img className="favorite" onClick={handleFavoriteButtonClick}
      src={isFavorite ? "like.png" : "dislike.png"} alt="" />
    </div>
  );
}
