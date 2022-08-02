import React, {useState} from "react";
import "../index.css"
import Searchbars from "./Searchbars"
import SearchedPlayerCard from "./PlayerCard"


function PlayerStatistics({playersDisplayed}){

    const [nameSearch, setNameSearch] = useState("")
    const [positionSearch, setPositionSearch] = useState("")

    

    return(
        <div id="player_stats">
            <Searchbars nameSearch={nameSearch} setNameSearch={setNameSearch} positionSearch={positionSearch} setPositionSearch={setPositionSearch}/>
            <div className="player_collection">
                {playersDisplayed.map((player) => {
                    return <SearchedPlayerCard key={player.id} player={player} />
                })}           
            </div>
        </div>   
    )
}

export default PlayerStatistics