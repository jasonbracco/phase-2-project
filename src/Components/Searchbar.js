import React from 'react'


function Searchbars({nameSearch, setNameSearch, searchedPlayers}){

    function onNameSearch(event){
        setNameSearch(event.target.value)
    }
    
    function handlePlayerSearchSubmit(event){
        event.preventDefault()
        searchedPlayers(nameSearch)
    }

    return(
        <div className="searchbars">
            <form onSubmit={handlePlayerSearchSubmit}>
                <label >
                    <span>Search by Player Name: </span>
                </label>
                <input type="text" placeholder="Player Name" value={nameSearch} onChange={onNameSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbars