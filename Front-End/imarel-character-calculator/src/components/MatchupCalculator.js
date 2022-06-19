import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const MatchupCalculator = (props) => {
    const { globalState, setGlobalState } = useContext(GlobalContext)
    return (
        <>
            <h1>This is the matchups calculator page!</h1>
            <h2>(I don't do anything except display the global state for debug purposes quite yet. Come back later!)</h2>
            <div style={{textAlign:"start", width:"300px", margin:"0 auto"}}>
                <label>Global State: </label>
                <pre>{JSON.stringify(globalState, null, "\t")}</pre>
            </div>
        </>
    );
}

export default MatchupCalculator;