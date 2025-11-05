import React from 'react'

function Card(props) {
    console.log("props", props);
    
    return (
        <div>This card is created by : {props.username}</div>
    )
}

export default Card
