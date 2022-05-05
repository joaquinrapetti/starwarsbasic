import React, { useState } from "react";
// import FilmItemRow from "./FilmItemRow";

const StarWars = () => {
  const [character, setCharacter] = useState({
    loadedCharacter: false,
    name: null,
    height: null,
    homeworld: null,
    films: [],
  });

  const getNewCharacter = () => {
    // console.log("get character from button");
    const randomNumber = Math.round(Math.random() * 88);

    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          imageUrl: data.image,
          films: data.films,
        });
        console.log(data.image);
      });
  };

  //   const movies = character.films.map((url, index) => {
  //     return <FilmItemRow key={index} url={url} />;
  //   });

  return (
    <div>
      {character.loadedCharacter && (
        <div>
          <img src={character.imageUrl} alt={character.name} className="img" />
          <h1>{character.name}</h1>
          <p>{character.height} cms</p>
          <p>
            <a
              href={character.homeworld}
              target="_blank"
              rel="noopener noreferrer"
            >
              Homeworld
            </a>
          </p>
          {/* <ul>
            <li>{movies}</li>
          </ul> */}
        </div>
      )}
      <button onClick={() => getNewCharacter()} className="btn">
        Randomize Character
      </button>
    </div>
  );
};

export default StarWars;
