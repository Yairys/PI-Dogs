import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validate } from "./validate";
import { getTemps, getDogs } from "../../Redux/Actions";
import { createDog } from "../../Redux/Actions";
import { Link, useHistory } from "react-router-dom";
import "./CreateDog.css";

export default function CreateDog() {
  const history = useHistory();

  const dogs = useSelector((state) => state.dogs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());

    dispatch(getTemps());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);
 const [errorButton, setErrorButton] = useState(true);
  const [errors, setErrors] = useState({});
  /* const [loading, setLoading] = useState(false); */

  const [input, setInput] = useState({
    name: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    min_lifeSpan: "",
    max_lifeSpan: "",
    image: "",
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    if (Object.keys(errors).length !== 0) {
      setErrorButton(true);
    } else {
      setErrorButton(false);
    }
  }

  let handleSelect = (e) => {
    setInput({
      ...input,
      temperament: [...new Set(([...input.temperament, e.target.value]))],
    });
  };

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((e) => e !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const duplicated = dogs.filter(
      (e) => e.name.toLowerCase() === input.name.toLowerCase()
    );
    if(input.temperament.length===0) return alert('You must select almost one Temperament')
    if(input.temperament.length>4) return alert('Only 4 temperaments allowed')
    if (duplicated.length) {
      return alert("This Dogs Breed Already Exists");
    } else {
    }

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    if (Object.keys(errors).length === 0) {
      alert("Enviando formulario");
    } else {
      return;
    }
    /* setLoading(true); */
    dispatch(createDog(input, history.push("/create/send")));
  }

  return (
    <div className="containerCreate">
      <h2>Your dog's breed isn't listed?... You can include it here</h2>
      <div className="group">
        <form onSubmit={handleSubmit}>
          <div className="breed">
            <label>Breed:</label>
            <input
              autoComplete="off"
              type={"text"}
              name={"name"}
              value={input.name}
              placeholder="Type the Dog's Breed"
              onChange={handleChange}
              required={true}
            />
            {errors.name ? <span className="error">{errors.name}</span> : false}
          </div>

          <div>
            <label>Weight:</label>
            <input
              autoComplete="off"
              className="numInput"
              type={"text"}
              name={"min_weight"}
              value={input.min_weight}
              placeholder={"Min"}
              onChange={handleChange}
              required={true}
            />

            <input
              autoComplete="off"
              className="numInput"
              type={"text"}
              name={"max_weight"}
              value={input.max_weight}
              placeholder={"Max"}
              onChange={handleChange}
              required={true}
            />
            {errors.min_weight ? (
              <span className="error">{errors.min_weight}</span>
            ) : (
              false
            )}
            {errors.max_weight ? (
              <span className="error">{errors.max_weight}</span>
            ) : (
              false
            )}
          </div>

          <div>
            <label>Height:</label>
            <input
              className="numInput"
              type={"text"}
              name={"min_height"}
              value={input.min_height}
              placeholder={"Min"}
              onChange={handleChange}
              required={true}
            />
            <input
              className="numInput"
              type={"text"}
              name={"max_height"}
              value={input.max_height}
              placeholder={"Max"}
              onChange={handleChange}
              required={true}
            />
            {errors.min_height ? (
              <span className="error">{errors.min_height}</span>
            ) : (
              false
            )}
            {errors.max_height ? (
              <span className="error">{errors.max_height}</span>
            ) : (
              false
            )}
          </div>

          <div>
            <label>Life Span: </label>
            <input
              className="numInput"
              type={"text"}
              name={"min_lifeSpan"}
              value={input.min_lifeSpan}
              placeholder={"Min"}
              onChange={handleChange}
            />
            {errors.min_lifeSpan ? (
              <span className="error">{errors.min_lifeSpan}</span>
            ) : (
              false
            )}

            <input
              className="numInput"
              type={"text"}
              name={"max_lifeSpan"}
              value={input.max_lifeSpan}
              placeholder={"Max"}
              onChange={handleChange}
            />
            {errors.max_lifeSpan ? (
              <span className="error">{errors.max_lifeSpan}</span>
            ) : (
              false
            )}
          </div>

          <div>
            <label>Image URL: </label>
            <input
              autoComplete="off"
              type="url"
              name={"image"}
              value={input["image"]}
              placeholder={"https://"}
              onChange={handleChange}
            />
            {errors.image ? (
              <span className="error">{errors.image}</span>
            ) : (false)}
          </div>

          <div>
            <label>Temperaments </label>
            <select
              className="createTemp"
              onChange={handleSelect}
              required={true}
            >
              <option value="all">Temperaments</option>
              {temperaments.map((temp) => (
                <option value={temp.id} key={temp.id}>
                  {temp.name}
                </option>
              ))}
            </select>
            <div className="SelectTemp">
              {input.temperament.map((el) => {
                let tempName = temperaments.find((temp) => {
                  return temp.id === Number(el);
                })?.name;

                return (
                  <button
                    className="deleteTemp"
                    onClick={() => handleDelete(el)}
                  >
                    {tempName}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="botones">
            <div className="boton">
              <button
              disabled={errorButton}
               className="send" type="submit">
                Create
              </button>
            </div>

            <div className="boton">
              <Link to={"/dogs"}>
                <button className="send">BACK TO HOME</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
