import React from 'react'


function Searchbars({nameSearch, setNameSearch, positionSearch, setPositionSearch, searchedPlayers}){

    function onNameSearch(event){
        setNameSearch(event.target.value)
    }

    function onPositionSearch(event){
        setPositionSearch(event.target.value)
    }

    function handlePlayerSearchSubmit(){
        searchedPlayers(nameSearch)
    }
   

    return(
        <div className="searchbars">
            <form>
                <label >
                        <span>Search by Player Name: </span>
                </label>
                <input type="text" placeholder="Player Name" value={nameSearch} onChange={onNameSearch}/>
                <button type="submit" onSubmit={handlePlayerSearchSubmit}>Search</button>
            </form>
            <form>
                <label >
                    <span>Search by Position: </span>
                </label>
                <input type="text" placeholder="Position" value={positionSearch} onChange={onPositionSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbars