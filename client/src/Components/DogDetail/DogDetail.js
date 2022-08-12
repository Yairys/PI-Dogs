import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../../Redux/Actions";
import { useEffect } from "react";
import gif from "../../Assets/image/corgifast.gif";
import "./DogDetail.css";

export default function DogDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanDetail())
    dispatch(getDetail(props.match.params.id));
    dispatch(cleanDetail());
  }, [dispatch]);

  const currentDog = useSelector((state) => state.detail);

  return (
    <div className="contDetail">
      <div className="detail">
        {currentDog ? (
          <div className="cardDetail">
            <div className="imgDetail">
              <img src={currentDog.image} />
              <div className="buttonHome">
                {" "}
                <Link exact to={"/dogs"}>
                  <button className="toHome">BACK TO HOME</button>
                </Link>
              </div>
            </div>
            <div className="contentDetail">
              <div className="h1">
                <h1> {currentDog.name}</h1>
              </div>
              <div className="weight">
                <h3> Weight:</h3>
                <p>
                  {" "}
                  {currentDog.min_weight} - {currentDog.max_weight} Kg
                </p>
              </div>
              <h3> Height:</h3>
              <p>
                {" "}
                {currentDog.min_height} - {currentDog.max_height} Cm
              </p>
              <h3> Life Span:</h3>
              <p>
                {" "}
                {currentDog.min_lifeSpan} - {currentDog.max_lifeSpan} Years
              </p>

              <h3> Temperament: </h3>
              <p>{currentDog.temperament}</p>
            </div>
          </div>
        ) : (
          <div className="contGif">
          <div className="gif">
            <img src={gif} alt="myGif" />
          </div>
          </div>
        )}
      </div>
    </div>
  );
}