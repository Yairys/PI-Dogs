import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FiltersBar.css";

import { useEffect } from "react";
import {
  getTemps,
  filterByTemperament,
  filterCreated,
  orderByName,
  orderByWeight,
} from "../../Redux/Actions";

export default function FiltersBar(props) {
  const [, setOrder] = useState("");

  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);

  function handleFilterTemperament(e) {
    dispatch(filterByTemperament(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(`Ordenado${e.target.value}`);
  }
  function handleSortByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));

    setOrder(`Ordenado${e.target.value}`);
  }

  return (
    <div className={props.filtersBox}>
      <div className={props.filters}>
        <div className="alphabetical">
          <select className={props.selectFilters} onChange={(e) => handleSort(e)}>
            <option value="all">Order By Name</option>
            <option value="asc"> A to Z</option>
            <option value="desc">Z to A</option>
          </select>
        </div>

        <select  className={props.selectFilters} onChange={(e) => handleSortByWeight(e)}>
          <option value="all">Order By weight</option>
          <option value="higher">High to low</option>
          <option value="lower">Low to High</option>
        </select>

        <select  className={props.selectFilters} onChange={(e) => handleFilterTemperament(e)}>
          <option value="all">Filter By Temperament</option>
          {temperaments.map((temp) => (
            <option value={temp.name} key={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>

        <select className={props.selectFilters} onChange={(e) => handleFilterCreated(e)}>
          <option value="all">Filter By Origin</option>
          <option value="api">Api</option>
          <option value="db">DB</option>
        </select>
      </div>
    </div>
  );
}
