import React from "react";

const StatContainer = (props) => {

    return (
        <div className="stat-container">
            <span>{props.statName}</span>
            <input type={props.inputType} className="stat-textarea" min={props.inputMin}/>
        </div>
    );

}

export default StatContainer;