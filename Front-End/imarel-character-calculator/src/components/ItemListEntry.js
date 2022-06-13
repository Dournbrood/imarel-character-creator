import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const ItemListEntry = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    return (
        <>
        {props.itemKey + ": "} 
            {Object.keys(globalState.items[props.itemKey].stats).map((statName) => (
                <>{globalState.items[props.itemKey].stats[statName].base}% base {statName}, {globalState.items[props.itemKey].stats[statName].bonus}% bonus {statName}; </>
            ))}
        </>
    );
}

export default ItemListEntry;