import React, { useContext, useState } from "react";
import axios from 'axios';
import { GlobalContext } from "../contexts/GlobalContext";
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
        <br />
        <textarea name="targetEndpoint" value={globalState.targetEndpoint} onChange={handleChange} />

    </div>);
}

export default CharacterCalculator;