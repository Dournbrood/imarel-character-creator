import { useState } from "react";
import React from "react";
import axios from 'axios';

function RequestCard(props) {

    const [cardState, setCardState] = useState({
        targetEndpoint: '',
        endpointRes: ''
    });

    const handleAPIRequest = (e) => {
        e.preventDefault();
        //API call goes here
        axios
            .get(`http://localhost:3001/${cardState.targetEndpoint}`)
            .then((response) => {
                setCardState((prev) => ({
                    ...prev,
                    endpointRes: response.data
                }))
            })
    }

    const handleChange = (e) => {
        setCardState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <label>
                Target Endpoint: (Possible values: 'moo', 'potato', or empty string: '')
            </label>
            <br />
            {`Endpoint return value: ${cardState.endpointRes}`}
            <textarea name="targetEndpoint" value={cardState.targetEndpoint} onChange={handleChange} />

            <button onClick={handleAPIRequest}>Request</button>
        </div>
    );
}

export default RequestCard;