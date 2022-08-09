import React from "react"
import "../index.css"

function HitterBack({image, firstName, lastName, fullName, hitterStats}){


    return(
        <div className="back">
            <img src={image} alt={fullName} className="player_image"/>
             <div className="card_content">
                <h4>{firstName} {lastName}</h4>
                <p>Average: {hitterStats.avg}</p>
                <p>Home Runs: {hitterStats.hr}</p>
                <p>RBIs: {hitterStats.rbi}</p>
                <p>OBP: {hitterStats.obp}</p>
            </div>
        </div>
    )
}

export default HitterBack