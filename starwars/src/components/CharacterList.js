import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container } from "reactstrap";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            console.log("response", response.data.results);
            setCharacters(response.data.results)
        })
        .catch(error => {
            console.log("silly error", error)
        });
    }, []);

    return (
        <Container>
            {characters.map(character => {
                return (
                    <CharacterCard 
                    key={character.index}
                    name={character.name}
                    birth_year={character.birth_year}
                    skin_color={character.skin_color}
                    mass={character.mass}
                    height={character.height}
                    />
                )
            })}
        </Container>
    )
}