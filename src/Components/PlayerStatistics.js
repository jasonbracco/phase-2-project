import React, {useState} from "react";
import "../index.css"
import Searchbars from "./Searchbars"
import PlayerCard from "./PlayerCard"


function PlayerStatistics({playersDisplayed}){

    const [nameSearch, setNameSearch] = useState("")

    return(
        <Searchbars nameSearch={nameSearch} setNameSearch={setNameSearch}/>
        
    )
}

export default PlayerStatistics