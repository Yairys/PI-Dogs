import React from "react";
import { Link } from "react-router-dom";
import "./DogCard.css";

export default function DogCard({
  name,
  image,
  temperament,
  min_weight,
  max_weight,
  id,
}) {
  return (
    
    <Link to={`/dogs/${id}`} className="link_container">
      <div className="cont_container">
        <div className="imagen">
        <img className="dogPhoto" src={image} alt="" width="400px" height="" />
        </div>
        <div className="empty">
        </div>

        <div className="cont_text">
          <h4 className="name"> {name}</h4>
          <div className="blur">
            <div >
              <p className="card_temp">
                <b> Temperament: </b>
                {temperament}
              </p>
              <p>
                <b>Weight:</b> {`${min_weight} - ${max_weight} Kg`}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
    
  );
}
