import React from 'react'


function PlayerForm({bats, setBats, throws, setThrows, position, setPosition, number, setNumber, firstName, setFirstName, lastName, setLastName, image, setImage, onAddPlayer}){

    function handleFirstName(event){
        setFirstName(event.target.value)
      }

      function handleLastName(event){
        setLastName(event.target.value)
      }

      function handlePosition(event){
        setPosition(event.target.value)
      }

      function handleNumber(event){
        setNumber(event.target.value)
      }

      function handleBats(event){
        setBats(event.target.value)
      }

      function handleThrows(event){
        setThrows(event.target.value)
      }

      function handleImage(event){
        setImage(event.target.value)
      }


    function onPlayerSubmit(event){
        event.preventDefault()
        const newPlayer={
            "bats": bats,
            "image": image,
            "firstName": firstName,
            "fullName": (lastName, firstName),
            "lastName": lastName,
            "number": number,
            "position": position,
            "throws": throws
        }
        fetch("http://localhost:3000/yankees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlayer),
        })
        .then(response => response.json())
        .then(newPlayer => onAddPlayer(newPlayer))
        setFirstName("")
        setLastName("")
        setImage("")
        setNumber("")
        setPosition("")
        setBats("")
        setThrows("")
    }

    return(
        <div className="new_player_form">
        <form className="add_player_form" onSubmit={onPlayerSubmit}>
          <h3>Create a player!</h3>
          <input
            type="text"
            name="first name"
            value={firstName}
            onChange={handleFirstName}
            placeholder="First Name"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="last name"
            value={lastName}
            onChange={handleLastName}
            placeholder="Last Name"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="position"
            value={position}
            onChange={handlePosition}
            placeholder="Position"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleNumber}
            placeholder="Number"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="bats"
            value={bats}
            onChange={handleBats}
            placeholder="Bats"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="throws"
            value={throws}
            onChange={handleThrows}
            placeholder="Throws"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImage}
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