import React from "react";
import Engloba from "../../../assets/Engloba.png";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

import "./style.css";

import { Dropdowns } from "./Dropdown";

export const HeaderLeft = () => {
  const [menu, setMenu] = React.useState(false);

  return (
    <section>
      <div className="containerLeft">
        <div>
          <img src={Engloba} alt="Engloba" />
        </div>
        <div className="vLine"></div>
        <div>
          <button
            className={`MenuButton ${menu && "MenuButtonActive"}`}
            onClick={() => setMenu(!menu)}
          ></button>
        </div>
        <div className="vLine"></div>
        <div className="containerDropdowns">
          <Dropdowns />
          <div className="InputBox">
            <input type="text" placeholder="Pesquisar..." />
            <FaSearch />
          </div>
        </div>
      </div>
    </section>
  );
};
