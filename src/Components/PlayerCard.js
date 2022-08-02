import React from "react"
import "../index.css"

function PlayerCard({ player}){
    
    const {bats, throws, image, firstName, lastName, number, position, fullName} = player

    return(
        <div className="player_card">
            <img src={image} alt={fullName} className="player_image"/>
            <div className="card_content">
                <h4>{firstName} {lastName}</h4>
                <p>Number {number}</p>
                <p>Position: {position}</p>
                <p>Bats: {bats}</p>
                <p>Throws: {throws}</p>
            </div>
        </div>
    )
}

export default PlayerCard