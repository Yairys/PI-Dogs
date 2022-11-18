import React from "react";
import FiltersBar from "../FiltersBar/FiltersBar";
import "./Modal.css";
import ResetButton from "../ResetButton/ResetButton";

export default function Modal({state, changeState}) {
  return (
    <>
    {state &&
    <div className="overlay">
      <div className="contModal">
        <div className="headerModal">
          <h3>FILTERS</h3>
        </div>

        <button className="closeModal"  onClick={() => changeState(false)}>X</button>

        <div className="modalCenter">
           <FiltersBar  filters="filtersModal" selectFilters="selectFiltersModal"/>
        </div>
        <div className="modalBottom"> <ResetButton/></div>
      </div>
    </div>
    }
    </>
  );
}
