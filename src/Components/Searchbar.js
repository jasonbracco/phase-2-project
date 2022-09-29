import React from 'react'


function Searchbar(){

    return(
        <div className="searchbars">
            <form onSubmit={handlePlayerSearchSubmit}>
                <label >
                    <span>Search by Shoe Name: </span>
                </label>
                <input type="text" placeholder="Player Name" value={nameSearch} onChange={onNameSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar