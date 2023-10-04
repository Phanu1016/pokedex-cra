import React from "react"

const Pokecard = ({pokedex}) => {
    return (
        <div style={{display: "flex", padding: "20px"}}>
            {pokedex.map( pokemon => (
                <div style={{ width: "150px", height: "250px", borderRadius: "5px", backgroundColor: "#cccccc", textAlign: "center", margin: "10px"}}>
                    <h4 style={{paddingTop: "5px", color: "blue"}}>{pokemon.name}</h4>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}></img>
                    <p style={{marginBottom: "-15px"}}>Type: {pokemon.type}</p>
                    <p>EXP: {pokemon.base_experience}</p>
                </div>
            ))}
        </div>
    )
}

export default Pokecard