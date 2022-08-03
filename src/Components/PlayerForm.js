import React from 'react'


function PlayerForm({bats, setBats, throws, setThrows, position, setPosition, number, setNumber, firstName, setFirstName, lastName, setLastName, image, setImage}){

    function onPlayerSubmit(event){
        event.preventDefault()
        const newPlayer={
            "bats": bats,
            "image": image,
            "firstName": firstName,
            "fullName": lastName, firstName,
            "lastName": lastName,
            "number": number,
            "position": position,
            "throws": throws
        }
        
    }


    return(
        <div className="new_player_form">
        <form className="add_player_form" onSubmit={onPlayerSubmit}>
          <h3>Create a player!</h3>
          <input
            type="text"
            name="first name"
            value={firstName}
            onChange
            placeholder="First Name"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="last name"
            value={lastName}
            onChange
            placeholder="Last Name"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="position"
            value={position}
            onChange
            placeholder="Position"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="number"
            value={number}
            onChange
            placeholder="Number"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="bats"
            value={bats}
            onChange
            placeholder="Bats"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="throws"
            value={throws}
            onChange
            placeholder="Throws"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            value={image}
            onChange
            placeholder="Image URL"
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create"
            className="submit"
          />
        </form>
      </div>
    );
}

export default PlayerForm