import React from "react";
import PlayerCard from "./PlayerCard"
import "../index.css"


function CurrentRoster({playersDisplayed}){
 
    return(
        <div className="player_collection">
            {playersDisplayed.map((player) => {
                return <PlayerCard key={player.id} player={player} />
            })}
        </div>
    )
}

export default CurrentRoster