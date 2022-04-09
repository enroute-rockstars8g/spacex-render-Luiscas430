import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getCharacterByID } from "../../services/service";
import '../../styles/characters.css';

export const Mortydex: FC = () => {
    const randNum = Math.floor(Math.random() * 827)
    const url = "https://rickandmortyapi.com/api/character/";
    const [characterID, setCharacterID] = useState<number>(randNum);
    const [actualCharacter, setActualCharacter] = useState<any>(undefined);

    useEffect(() => {
        const firstCharacter = async () => {
        const newCharacter = await getCharacterByID(characterID);
        setActualCharacter(newCharacter);
        };

        firstCharacter();
    }, []);

    const getCharacterID = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "") setCharacterID(parseInt(event.target.value));
        else setCharacterID(2);
    };

    const fetchCharacter = async () => {
        const newCharacter = await getCharacterByID(characterID);
        setActualCharacter(newCharacter);
    };

  return (
    <div className="container">    
        {actualCharacter !== undefined ? (
            <div className="card">
                <h5>Look for character (1-826):</h5>
                <input type="text" onChange={getCharacterID} />
                <img className="card-img-top" src={actualCharacter.image} alt="character" />
                <div className="card-body">
                    <h4 className="card-title"> <b>{actualCharacter.name}</b></h4>
                    <p> <b>Species:</b>  {actualCharacter.species}</p>
                    <p> <b>Origin:</b> {actualCharacter.origin.name}</p>
                    <p> <b>Status:</b> {actualCharacter.status}</p>
                </div>
                <button onClick={fetchCharacter}>Search</button>
            </div>
      ) : null}
    </div>
  );
};