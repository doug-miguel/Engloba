import React from "react";

import { HeaderRight } from "./Profile";
import { HeaderLeft } from "./Search";

import "./style.css";

export const Header = () => {
  return (
    <header className="containerHeader">
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};
