import React, { useState, useEffect } from "react"
import "../index.css"

function SearchedPlayerCard({player}){

    const [flipped, setFlipped]=useState(true)
    const [playerStats, setPlayerStats]=useState([])

    const {id, bats, throws, image, firstName, lastName, number, position, fullName} = player

    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2017'&player_id=${id}`)
        .then(response => response.json())
        .then((stats) => setPlayerStats(stats.sport_hitting_tm.queryResults.row))
    },[id])

    function handleFlipped(){
        if (position==="P"){
            return alert("This is a pitcher, and nobody cares about their stats")
        }
        else{
        setFlipped(!flipped)
        }
    }

    return(
        <div className="player_card" onClick={handleFlipped}>
            {flipped ? 
            <div className="front">
                <img src={image} alt={fullName} className="player_image"/>
                <div className="card_content">
                    <h4>{firstName} {lastName}</h4>
                    <p>Number {number}</p>
                    <p>Position: {position}</p>
                    <p>Bats: {bats}</p>
                    <p>Throws: {throws}</p>
                </div>
            </div>:
            <div className="back">
                <img src={image} alt={fullName} className="player_image"/>
                <div className="card_content">
                    <h4>{firstName} {lastName}</h4>
                    <p>Average: {playerStats.avg}</p>
                    <p>Home Runs: {playerStats.hr}</p>
                    <p>RBIs: {playerStats.rbi}</p>
                    <p>OBP: {playerStats.obp}</p>
                </div>
            </div>}
        </div>

    )
}

export default SearchedPlayerCard