import React from "react";

const StatContainer = (props) => {

    return (
        <div className="stat-container">
            <span>{props.statName}</span>
            <textarea className="stat-textarea"/>
        </div>
    );

}

export default StatContainer;