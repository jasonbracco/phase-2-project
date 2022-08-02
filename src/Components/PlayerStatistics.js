import React, {useState} from "react";
import "../index.css"
import Searchbars from "./Searchbars"
import PlayerCard from "./PlayerCard"


function PlayerStatistics({playersDisplayed}){

    const [nameSearch, setNameSearch] = useState("")
    const [positionSearch, setPositionSearch] = useState("")

    return(
        <Searchbars nameSearch={nameSearch} setNameSearch={setNameSearch} positionSearch={positionSearch} setPositionSearch={setPositionSearch}/>
        
    )
}

export default PlayerStatistics