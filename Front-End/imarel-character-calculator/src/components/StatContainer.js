import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const StatContainer = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    return (
        <div className="stat-container">
            <span>{props.statName}</span>
            <input type={props.inputType} className="stat-textarea" min={props.inputMin} value={globalState[props.statName]} onChange={(event) => {
                event.preventDefault();
                setGlobalState((previous) => ({
                    ...previous,
                    [props.statName]: event.target.value
                }));
            }}/>
        </div>
    );

}

export default StatContainer;