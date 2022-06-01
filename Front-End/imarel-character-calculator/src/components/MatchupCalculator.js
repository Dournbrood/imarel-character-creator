import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const MatchupCalculator = (props) => {
    const {globalState, setGlobalState} = useContext(GlobalContext)
    return (
        <>
        <h1>This is the matchups calculator page!</h1>
        <h2>Global state is: {globalState.targetEndpoint} </h2>
        </>
    );
}

export default MatchupCalculator;