import React, { useState, useEffect } from "react"
import HitterBack from "./HitterBack"
import PitcherBack from "./PitcherBack"
import "../index.css"

function SearchedPlayerCard({player}){

    const [hitterStats, setHitterStats]=useState([])
    const [pitcherStats, setPitcherStats]=useState([])
    const [flipped, setFlipped]=useState(true)
    const [isPitcher, setIsPitcher]=useState(true)


    const {id, bats, throws, image, firstName, lastName, number, position, fullName} = player

    useEffect(() => {
        if (position !=="P"){
            fetch(`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id=${id}`)
            .then(response => response.json())
            .then((stats) => setHitterStats(stats.sport_hitting_tm.queryResults.row))
            setIsPitcher(!isPitcher)
        }
        else {
            fetch(`http://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id=${id}`)
            .then(response => response.json())
            .then((stats) => setPitcherStats(stats.sport_pitching_tm.queryResults.row))
            }
    },[position, id])

    function handleFlipped(){
        setFlipped(!flipped)
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
                isPitcher ?
                    <PitcherBack image={image} fullName={fullName} firstName={firstName} lastName={lastName}
                    pitcherStats={pitcherStats}/>:
                    <HitterBack image={image} fullName={fullName} firstName={firstName} lastName={lastName}
                    hitterStats={hitterStats}/>
            }
        </div>

    )
}

export default SearchedPlayerCard