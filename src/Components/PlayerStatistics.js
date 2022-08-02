import React, {useState} from "react";
import "../index.css"
import Searchbars from "./Searchbars"
import SearchedPlayerCard from "./PlayerCard"


function PlayerStatistics({players}){

    const [nameSearch, setNameSearch] = useState("")
    const [positionSearch, setPositionSearch] = useState("")

    console.log(players)

    function searchedPlayers(){
        players.filter((object) => {
          const lowerCaseSearch = nameSearch.toLowerCase()
          console.log(lowerCaseSearch)
          console.log(object.fullName.toLowerCase())
          if(object.fullName.toLowerCase().includes(lowerCaseSearch)){
            return object
          }
      })}

    

    return(
        <div id="player_stats">
            <Searchbars nameSearch={nameSearch} setNameSearch={setNameSearch} positionSearch={positionSearch} setPositionSearch={setPositionSearch} searchedPlayers={searchedPlayers}/>
            <div className="player_collection">
                {players.map((player) => {
                    return <SearchedPlayerCard key={player.id} player={player} />
                })}           
            </div>
        </div>   
    )
}

export default PlayerStatistics