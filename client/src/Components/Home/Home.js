import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DogCards from "../DogCards/DogCards";
import FiltersBar from "../FiltersBar/FiltersBar";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import { getDogs } from "../../Redux/Actions";
import { IoFilter } from "react-icons/io5";
import ResetButton from "../ResetButton/ResetButton";


export default function Home() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    dispatch(getDogs());
  }

  return (
    <div className="contGral">
      <div className="navBar">
        <NavBar />
      </div>


      <div className="buttonModal">
        <button className="hideModal"  onClick={() => setModal(true)}> <IoFilter/> FILTROS</button>
      </div>
      <Modal state={modal}
      changeState={setModal}/> 
      <div className="midBar hidden">
        <div className="filters">
          <FiltersBar filtersBox="filtersBox" filters="filters" selectFilters="selectFilters" />
        </div>

        <div className="resetAndSearch">
          <div className="search">
            <SearchBar />
          </div>
          <div className="reset">
            <ResetButton reset={handleClick}/>
          </div>
        </div>
      </div>

        <div className="cardsCont">
          <DogCards />
        </div>
    </div>
  );
}
