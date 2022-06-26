import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const StatList = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    const generateStatTotals = () => {
        let statTotals = {};
        let statString = "";
        Object.keys(globalState.items).forEach((itemName) => {
            if (globalState.items[itemName].enabled) {
                Object.keys(globalState.items[itemName].stats).forEach((statName) => {
                    if (statName in statTotals) {
                        if (Math.abs(parseInt(globalState.items[itemName].stats[statName].base)) > Math.abs(parseInt(statTotals[statName].base))) {
                            statTotals[statName].base = parseInt(globalState.items[itemName].stats[statName].base)
                        }
                        statTotals[statName].bonus = parseInt(statTotals[statName].bonus) + parseInt(globalState.items[itemName].stats[statName].bonus);
                    }
                    else {
                        statTotals[statName] = {}
                        statTotals[statName].base = parseInt(globalState.items[itemName].stats[statName].base);
                        statTotals[statName].bonus = parseInt(globalState.items[itemName].stats[statName].bonus);
                    }
                })
            }
        })
        Object.keys(statTotals).forEach((statName) => {
            statTotals[statName] = parseInt(statTotals[statName].base) + parseInt(statTotals[statName].bonus);
            statString = statString += `${statTotals[statName]}% ${statName}; `;
        });
        statString = statString.slice(0, -1);
        setGlobalState((previous) => ({
            ...previous,
            totals: { ...statTotals },
            statBlock: `[${statString}]`
        }));
    }

    return (
        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
            <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "end", gap: "40px" }}>
                <label>Stat Block:</label>
                <input className={"stat-textarea"} type={"text"} value={((globalState && globalState.statBlock) ? globalState.statBlock : "")} style={{ width: "150px", marginRight: "16px" }} />
            </div>
            <input type={"button"} value="Generate stats" onClick={generateStatTotals} />
            <>
                {
                    ((globalState && globalState.totals) ?
                        Object.keys(globalState.totals).map((statName) => (
                            <>{statName}: {globalState.totals[statName]}% <br /></>
                        ))
                        : [])
                }
            </>
        </div>
    );
}

export default StatList;