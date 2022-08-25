import React from "react";

import { Graphic } from "../../components/Graphic";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import "./style.css";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="subContainer">
        <Menu />
        <Graphic />
      </div>
    </div>
  );
};
