import React from "react"
import "../index.css"

function PitcherBack({image, firstName, lastName, fullName, pitcherStats}){

    return(
        <div className="back">
                <img src={image} alt={fullName} className="player_image"/>
                <div className="card_content">
                    <h4>{firstName} {lastName}</h4>
                    <p>ERA: {pitcherStats.era}</p>
                    <p>WHIP: {pitcherStats.whip}</p>
                    <p>Strikeouts: {pitcherStats.so}</p>
                    <p>Strikeouts per 9: {pitcherStats.k9}</p>
                </div>
            </div>
    )
}

export default PitcherBack