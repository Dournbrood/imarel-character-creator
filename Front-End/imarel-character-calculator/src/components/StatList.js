import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const StatList = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    const generateStatTotals = () => {
        let statTotals = {}
        Object.keys(globalState.items).forEach((itemName) => {
            console.log(`Now evaluating item ${itemName} for stats...`)
            Object.keys(globalState.items[itemName].stats).forEach((statName) => {
                console.log(`Evaluating stat ${statName} in item ${itemName}...`)
                if(statName in statTotals) {
                    console.log(`Stat ${statName} already exists in totals list!`);
                    if(Math.abs(parseInt(globalState.items[itemName].stats[statName].base)) > Math.abs(parseInt(statTotals[statName].base))) {
                        statTotals[statName].base = parseInt(globalState.items[itemName].stats[statName].base)
                    }
                    statTotals[statName].bonus = parseInt(statTotals[statName].bonus) + parseInt(globalState.items[itemName].stats[statName].bonus);
                }
                else{
                    statTotals[statName] = {}
                    statTotals[statName].base = parseInt(globalState.items[itemName].stats[statName].base);
                    statTotals[statName].bonus = parseInt(globalState.items[itemName].stats[statName].bonus);
                }
            })
        })
        let moo = statTotals;
        console.log(moo);
        Object.keys(statTotals).forEach((statName) => {
            statTotals[statName] = parseInt(statTotals[statName].base) + parseInt(statTotals[statName].bonus);
        })
        setGlobalState((previous) => ({
            ...previous,
            totals: {...statTotals}
        }))
    }

    // useEffect(() => {
    //     generateStatTotals();
    // }, [globalState])

    return (
        <>
        <input type={"button"} value="Get Stats!" onClick={generateStatTotals}/>
        <>
        {
        ((globalState && globalState.totals) ? 
        Object.keys(globalState.totals).map((statName) => (
            <>{globalState.totals[statName]}% {statName}; </>
        ))
        : [])
        }
        </>
        </>
    );
}

export default StatList;