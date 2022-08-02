import React from "react";
import PlayerCard from "./PlayerCard"
import "../index.css"


function CurrentRoster({players}){
 
    return(
        <div className="player_collection">
            {players.map((player) => {
                return <PlayerCard key={player.id} player={player} />
            })}
        </div>
    )
}

export default CurrentRoster