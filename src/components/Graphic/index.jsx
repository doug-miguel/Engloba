import React from "react";

import { VictoryBar, VictoryChart } from "victory";

import "./style.css";

export const Graphic = () => {
  const data = [
    { quarter: 10, earnings: 13 },
    { quarter: 20, earnings: 16 },
    { quarter: 30, earnings: 14 },
    { quarter: 40, earnings: 19 },
  ];
  return (
    <section className="containerGraphic">
      <h1>Emissões</h1>
      <p>Quantidade de pedidos: 15</p>
      <VictoryChart>
        <VictoryBar data={data} alignment="start" x="quarter" y="earnings" />
      </VictoryChart>
    </section>
  );
};
