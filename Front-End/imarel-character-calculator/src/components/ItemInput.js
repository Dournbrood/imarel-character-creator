import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const ItemInput = (props) => {

    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const [itemFormState, setItemFormState] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setGlobalState((previous) => ({
            ...previous,
            items: {
                ...previous.items,
                [itemFormState.itemName]: {
                    stats: {
                        ...(previous && previous.items && previous.items[itemFormState.itemName] && previous.items[itemFormState.itemName].stats),
                        [itemFormState.statName]: {
                            base: itemFormState.statBase,
                            bonus: itemFormState.statBonus
                        }
                    }
                }
            }
        }));
        clearForm();
    }

    const handleChange = (event) => {
        setItemFormState((previous) => ({
            ...previous,
            [event.target.name]: event.target.value
        }))
    }

    const clearForm = () => {
        setItemFormState((previous) => ({
            itemName: previous.itemName,
            statName: "",
            statBase: "",
            statBonus: ""
        }))
    }

    return (
        <>
            <input type={"text"} onChange={handleChange} name="itemName" value={itemFormState.itemName} />
            <input type={"text"} onChange={handleChange} name="statName" value={itemFormState.statName} />
            <input type={"number"} onChange={handleChange} name="statBase" value={itemFormState.statBase} />
            <input type={"number"} onChange={handleChange} name="statBonus" value={itemFormState.statBonus} />
            <input type={"button"} onClick={handleSubmit} value="Add Stat" />
        </>
    );
}

export default ItemInput;