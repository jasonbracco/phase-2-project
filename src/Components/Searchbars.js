import React from 'react'


function Searchbars({nameSearch, setNameSearch}){

    function onNameSearch(event){
        setNameSearch(event.target.value)
    }
    console.log(nameSearch)

    return(
        <div className="searchbars">
            <form>
                <label >
                        <span>Search by Player Name: </span>
                </label>
                <input type="text" placeholder="Player Name" value={nameSearch} onChange={onNameSearch}/>
                <button type="submit">Search</button>
            </form>
            <form>
                <label >
                    <span>Search by Position: </span>
                </label>
                <input type="text" placeholder="Position"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbars