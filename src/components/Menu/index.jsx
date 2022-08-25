import React from "react";

import "./style.css";

import { FiTruck } from "@react-icons/all-files/fi/FiTruck";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { RiMoneyDollarCircleLine } from "@react-icons/all-files/ri/RiMoneyDollarCircleLine";
import { FaTools } from "@react-icons/all-files/fa/FaTools";
import { GrIntegration } from "@react-icons/all-files/gr/GrIntegration";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";

export const Menu = () => {
  return (
    <section className="gridMenu">
      <a href="#" className="cards">
        <FiTruck size={36} color="black" />
        <br />
        <p style={{ color: "black" }}>Operação</p>
      </a>
      <a href="#" className="cards">
        <FaChartLine size={36} color="black" />
        <br />
        <p style={{ color: "black" }}>Gestão</p>
      </a>
      <a href="#" className="cards">
        <RiMoneyDollarCircleLine size={36} color="black" />
        <br />
        <p style={{ color: "black" }}>Financeiro</p>
      </a>
      <a href="#" className="cards">
        <FaTools size={36} color="black" />
        <br />
        <p style={{ color: "black" }}>Ferramentas</p>
      </a>
      <a href="#" className="cards">
        <GrIntegration size={36} color="black" />
        <br />
        <p style={{ color: "black" }}>Integrações</p>
      </a>
      <a href="#" className="cards">
        <FiSettings size={36} color="black" />
        <br />
        <p style={{ color: "black" }}>Configurações</p>
      </a>
    </section>
  );
};
