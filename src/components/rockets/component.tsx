import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getRocketByNum } from "../../services/service";

export const Rocketex: FC = () => {
  const [rocketNum, setRocketNum] = useState<number>(1);
  const [actualRocket, setActualRocket] = useState<any>(undefined);

  useEffect(() => {
    const firstRocket = async () => {
      const newRocket = await getRocketByNum(rocketNum);
      setActualRocket(newRocket);
    };

    firstRocket();
  }, []);

  const getRocketNum = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") setRocketNum(parseInt(event.target.value));
    else setRocketNum(1);
  };

  const fetchRocket = async () => {
    const newRocket = await getRocketByNum(rocketNum);
    setActualRocket(newRocket);
  };

  /*
  const renderIndexes = (listIndex: any[]) => {
    const paragraphs = [];

    for (const index of listIndex) {
      paragraphs.push(
        <p>
          Engine number: {index.number}, type: {index.type}
        </p>
      );
    }

    return paragraphs;
  };
*/
  return (
    <div>
      <p>Rocketex, all the info about SpaceX Rockets!</p>
      <p>Write the number of rockets you want to see: </p>
      <input type="text" onChange={getRocketNum} />
      {actualRocket !== undefined ? (
        <div>
          <p>Name: {actualRocket.name}</p>
          <p>Company: {actualRocket.company}</p>
          <p>Boosters: {actualRocket.boosters}</p>
          <p>Cost: {actualRocket.cost_per_launch}</p>
          <p>Success Rate: {actualRocket.success_rate_pct}%</p>
          <p>Datos del motor:</p>
          
        </div>
      ) : null}
      <button onClick={fetchRocket}>Search</button>
    </div>
  );
};
