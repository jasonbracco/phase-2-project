import React, {useState} from "react";
import "../index.css"
import Searchbars from "./Searchbars"
import SearchedPlayerCard from "./SearchedPlayerCard"


function PlayerStatistics({players}){

    const [displaySearchedPlayers, setDisplaySearchedPlayers] = useState([])
    const [nameSearch, setNameSearch] = useState("")
    

    const playersToDisplay = players.filter((object) => {
        const lowerCaseSearch = nameSearch.toLowerCase()
        if(object.firstName.toLowerCase().includes(lowerCaseSearch) || object.lastName.toLowerCase().includes(lowerCaseSearch)){
            return object
        }
        else{
            return null
        }
    })

    function searchedPlayers(nameSearch){
        setDisplaySearchedPlayers(playersToDisplay.filter((object) => {
          const lowerCaseSearch = nameSearch.toLowerCase()
          if(object.fullName.toLowerCase().includes(lowerCaseSearch)){
            return object
        }   
        else{ return null
        }
    }))}


    return(
        <div id="player_stats">
            <Searchbars nameSearch={nameSearch} setNameSearch={setNameSearch} searchedPlayers={searchedPlayers}/>
            <div className="player_collection">
                {displaySearchedPlayers.map((player) => {
                    return <SearchedPlayerCard key={player.id} player={player}/>
                })}            
            </div>
        </div>   
    )
}

export default PlayerStatistics