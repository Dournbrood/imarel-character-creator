import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const ItemListEntry = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);

    const [itemListEntryState, setItemListEntryState] = useState({ enabled: false, collapsed: true });

    const handleCheckbox = (event) => {
        setGlobalState((previous) => ({
            ...(previous),
            items: {
                ...(previous && previous.items),
                [props.itemKey]: {
                    ...(previous && previous.items && previous.items[props.itemKey]),
                    enabled: ( previous && previous.items && previous.items[props.itemKey] && previous.items[props.itemKey].enabled !== undefined ? !previous.items[props.itemKey].enabled : true )
                }
            }
        }))
    }

    const handleCollapse = (event) => {
        setItemListEntryState((previous) => ({
            ...previous,
            collapsed: !previous.collapsed
        }))
    }

    try {
        return (
            <div>
                <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-between" }} onClick={handleCollapse}>
                    <div>
                        <input id="itemCheckbox" name="itemCheckbox" type={"checkbox"} onChange={handleCheckbox} checked={globalState.items[props.itemKey].enabled} />
                        <b>{props.itemKey}</b>
                    </div>
                    <input type="button" onClick={() => {
                        delete globalState.items[props.itemKey];
                        setGlobalState((previous) => ({ ...previous }))
                    }} value="Delete item" />
                </div>
                {
                    ((itemListEntryState && itemListEntryState.collapsed === false) ? Object.keys(globalState.items[props.itemKey].stats).map((statName) => (
                        <>{globalState.items[props.itemKey].stats[statName].base}% base {statName}, {globalState.items[props.itemKey].stats[statName].bonus}% bonus {statName}; </>
                    )) : [])
                }
            </div>
    
    
        );
    } catch (error) {
        console.log(error);
    }
  
}

export default ItemListEntry;