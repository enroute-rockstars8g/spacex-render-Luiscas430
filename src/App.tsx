import React, { FC, useEffect, useState } from "react";
import './App.css';
import { Rocketex } from "./components/rockets/component";
import { getRocketByNum } from "./services/service";

export const App: FC = () => {

  useEffect(() => {
    getRocketByNum(1);
  }, []);

  return (
    <>
      <h1>Luis Carlos Domínguez</h1>
      <Rocketex />
    </>
  );
}
