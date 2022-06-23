import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ItemListEntry from "./ItemListEntry";
const ItemList = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    return (
        <div style={{display: "flex", flexFlow: "column nowrap"}}>
            {((globalState && globalState.items) ? Object.keys(globalState.items).map((key) => (
                <ItemListEntry itemKey={key}/>
            )) : [])}
        </div>
    );
}

export default ItemList;