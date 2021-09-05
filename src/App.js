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
        <div className="description">Listen to my favourite kind of music.</div>
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
      </div>
      <div className="intro">
        <p>
          Here are my favourite{" "}
          <span className="intro-genre">{genre.toUpperCase()}</span> music!
        </p>
      </div>

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

      <footer className="main-footer">
        <div className="footer-content container">
          <p className="footer-text">
            Made with ❤ by Nikhil <br />
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/nikhil-sharma-nks/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a
              href="https://github.com/nikhil-sharma-nks"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-3x" />
            </a>
            <a
              href="https://twitter.com/wannabe_nikhil"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-3x" />
            </a>
            <a
              href="https://www.facebook.com/nikhilshawarma/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-facebook fa-3x" />
            </a>
            <a
              href="https://www.instagram.com/nikhil.shawarma/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-3x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
