import React from "react";

import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";

import "./style.css";

export const Dropdowns = () => {
  const [option, setOption] = React.useState();
  const [modal, setModal] = React.useState(false);

  function handleOutsideClick(event) {
    if (event.target.localName === "li") setModal(false);
  }

  return (
    <section className="containerDropdown" onClick={handleOutsideClick}>
      <div className="dropdown" onClick={() => setModal(!modal)}>
        <span>{option ? option.innerHTML : "Código"}</span>
        {modal ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      {modal ? (
        <nav className="navDropdown">
          <ul>
            <li onClick={({ target }) => setOption(target)}>Código</li>
            <li onClick={({ target }) => setOption(target)}>Descrição</li>
            <li onClick={({ target }) => setOption(target)}>SKU</li>
          </ul>
        </nav>
      ) : null}
    </section>
  );
};
