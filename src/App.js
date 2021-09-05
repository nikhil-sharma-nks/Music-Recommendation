/* eslint-disable jsx-a11y/iframe-has-title */
import "./App.css";
import { useState } from "react";
import musicData from "./music.data";

function App() {
  const [genre, setGenre] = useState("indie");

  function handleGenreClick(event) {
    const selectedGenre = event.target.innerText;
    setGenre(selectedGenre.toLowerCase());
  }
  return (
    <div className="App">
      <div className="header">
        <div className="title">Musicomato</div>
        <div className="description">Listen to my favourite kind of music</div>
        <div className="genres">
          {Object.keys(musicData).map((genreInData) => {
            return (
              <div className="genre" onClick={handleGenreClick}>
                {genreInData.toUpperCase()}
              </div>
            );
          })}
        </div>
        <br />
        <hr></hr>
        <br />
        <div className="options">
          {musicData[genre].map((song) => {
            return (
              <div className="option">
                <div className="song-name">{song.name}</div>
                <div className="artist-name">{song.artist}</div>
                <div className="player">
                  <iframe
                    src={song.spotify}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
