import React, { useContext, useState } from "react";
import axios from 'axios';
import { GlobalContext } from "../contexts/GlobalContext";
import StatContainer from "./StatContainer";
const CharacterCalculator = (props) => {

    const {globalState, setGlobalState} = React.useContext(GlobalContext);
    

    const handleChange = (e) => {
        e.preventDefault();
        setGlobalState((previous) => ({
            ...previous,
            [e.target.name]: e.target.value
        }))
    }

    return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <h1>
            This is the Character Calculator page!
        </h1>
        <h2>Basic character stats:</h2>
        <br />
        <StatContainer statName="Name:" inputType="text"/>
        <StatContainer statName="Gender:" inputType="text"/>
        <StatContainer statName="Age:" inputType="number" inputMin={1}/>
        <StatContainer statName="Race:" inputType="text"/>
        <StatContainer statName="Class:" inputType="text"/>
        



    </div>);
}

export default CharacterCalculator;