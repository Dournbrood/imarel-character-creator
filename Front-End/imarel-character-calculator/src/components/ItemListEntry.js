import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const ItemListEntry = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    return (
        <div>
            <b>{props.itemKey + ": "}</b>
            {Object.keys(globalState.items[props.itemKey].stats).map((statName) => (
                <>{globalState.items[props.itemKey].stats[statName].base}% base {statName}, {globalState.items[props.itemKey].stats[statName].bonus}% bonus {statName}; </>
            ))}
            <input type="button" onClick={()=>{
                delete globalState.items[props.itemKey];
                setGlobalState((previous) => ({...previous}))
            }} value="Delete item"/>
        </div>
    );
}

export default ItemListEntry;