import React from "react";

import "./style.css";

import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import { BiNotepad } from "@react-icons/all-files/bi/BiNotepad";
import { BiBell } from "@react-icons/all-files/bi/BiBell";
import { MdHelp } from "@react-icons/all-files/md/MdHelp";

export const HeaderRight = () => {
  return (
    <div className="containerRight">
      <FcCalendar className="iconClick" size={36} />
      <BiNotepad className="iconClick" size={36} color="yellow" />
      <BiBell className="iconClick" size={36} fill="green" color="green" />
      <MdHelp className="iconClick" size={36} fill="blue" />
      <div className="avatar">
        <img src="https://github.com/doug-miguel.png" />
      </div>
    </div>
  );
};
