import "./App.css";
import logo from "./img/logo.svg";
import React, { Component } from "react";

const API_KEY = process.env.REACT_APP_MDB_API_KEY; //Absolutely not secure, consider doing it on a backend Express server for actual API keys that cost money. This one is rate limited and free so it doesn't matter.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMovie: "",
      secondMovie: "",
      firstMovieData: [],
      secondMovieData: [],
      firstMovieID: "",
      secondMovieID: "",
      firstMovieCrew: [],
      secondMovieCrew: [],
      firstMoviePoster: "",
      secondMoviePoster: "",
    };
    this.scrollToResults = React.createRef();
  }

  handleFirstMovie = (e) => {
    this.setState({ firstMovie: e.target.value });
  };

  handleSecondMovie = (e) => {
    this.setState({ secondMovie: e.target.value });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    console.log("Submit was clicked");
    this.firstMovieRequest();
    if (this.state.secondMovie !== "") {
      this.secondMovieRequest();
    }

    this.myDivToFocus.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  firstMovieRequest = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&language=en-US&query=" +
        this.state.firstMovie +
        "&page=1&include_adult=yes"
    ).then((response) => response.json());
    this.setState(
      {
        firstMovieData: movieData,
        firstMovieID: movieData.results[0].id,
        firstMoviePoster: movieData.results[0].poster_path,
      },
      () => {
        console.log(this.state.firstMovieData);
        console.log(this.state.firstMovieID);
        console.log(this.state.firstMoviePoster);
      }
    );
    this.firstMovieCreditsRequest();
  };

  firstMovieCreditsRequest = async () => {
    const movieCredits = await fetch(
      `https://api.themoviedb.org/3/movie/${this.state.firstMovieID}/credits?api_key=${API_KEY}&language=en-US`
    ).then((response) => response.json());
    this.setState(
      {
        firstMovieCrew: movieCredits.crew,
      },
      () => {
        console.log(this.state.firstMovieCrew);
      }
    );
  };

  secondMovieRequest = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&language=en-US&query=" +
        this.state.secondMovie +
        "&page=1&include_adult=yes"
    ).then((response) => response.json());
    this.setState(
      {
        secondMovieData: movieData,
        secondMovieID: movieData.results[0].id,
        secondMoviePoster: movieData.results[0].poster_path,
      },
      () => {
        console.log(this.state.secondMovieData);
        console.log(this.state.secondMovieID);
        console.log(this.state.secondMoviePoster);
      }
    );
    this.secondMovieCreditsRequest();
  };

  secondMovieCreditsRequest = async () => {
    const movieCredits = await fetch(
      `https://api.themoviedb.org/3/movie/${this.state.secondMovieID}/credits?api_key=${API_KEY}&language=en-US`
    ).then((response) => response.json());
    this.setState(
      {
        secondMovieCrew: movieCredits,
      },
      () => {
        console.log(this.state.secondMovieCrew.crew);
      }
    );
  };

  render() {
    return (
      <div className="App container relative flex flex-col mx-auto bg-gray-800 text-center text-gray-100 h-200 items-center overflow-hidden w-screen">
        <div className="h-24 w-24 rounded-full absolute -right-10 -top-10 bg-gray-700"></div>
        <div className="h-44 w-44 rounded-full absolute -left-20 -top-20 bg-gray-700"></div>
        <div className="Apptitle my-8 text-lg font-medium tracking-widest text-pink-200">
          SCAENA
        </div>
        <div className="AppSubtitle mt-4 px-24 text-lg font-medium tracking-wide leading-relaxed">
          Production Cast for Shows and Movies
        </div>
        <div className="Searchbox container flex flex-col text-gray-800 bg-white content-center w-11/12 mx-auto my-12 pt-4 rounded-2xl  overflow-hidden">
          <div className="flex LogoContainer">
            <img
              src={logo}
              className="absolute h-44 -right-4 inset-y-25 transform -rotate-12"
              alt="Two people watching on a couch watching a movie"
            ></img>
          </div>
          <div className="flex m-2 p-6 pt-24 text-lg font-medium tracking-wide leading-relaxed">
            Enter two names
          </div>
          <div className="SearchItems box-border bg-gradient-to-tr from-pink-400 via-red-200 to-transparent object-cover h-full z-10">
            <input
              placeholder="Enter First movie"
              className="text-center py-2 mt-6 my-4 rounded-2xl bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-gray-300 focus:shadow-lg hover:bg-gray-700 text-gray-100"
              id="movie1"
              type="text"
              value={this.state.firstMovie}
              onChange={this.handleFirstMovie}
            ></input>
            <input
              placeholder="Enter Second movie"
              className="text-center py-2 my-4 rounded-2xl bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-gray-300 focus:shadow-lg hover:bg-gray-700 text-gray-100"
              id="movie2"
              type="text"
              value={this.state.secondMovie}
              onChange={this.handleSecondMovie}
            ></input>
            <div>
              <button
                className="GoButton absolute bg-gray-700 hover:bg-gray-600 text-pink-300 font-bold py-2 px-4 rounded-2xl w-16"
                type="submit"
                value="Submit"
                onClick={this.handleSubmission.bind(this)}
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div
          className="ResultScreen bg-gray-200 Searchbox container flex flex-col text-gray-800 w-11/12 mx-auto my-12 rounded-2xl"
          ref={this.scrollToResults}
        >
          <div className="grid grid-cols-3">
            <div className="grid grid-rows-5">
              <div className="specialbox h-12"></div>
              <div className="flex justify-center h-18 items-center bg-gray-700 text-gray-200  font-medium tracking-wide leading-relaxed">
                {this.state.firstMovie}
              </div>
              <div className="flex justify-center h-17 items-center bg-gray-700 text-gray-200 font-medium tracking-wide leading-relaxed">
                {this.state.secondMovie}
              </div>
              <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg font-medium tracking-wide leading-relaxed shadow-none">
                CREW
              </div>
            </div>
            <div className="">
              <div className=" overflow-hidden ">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w200" +
                    this.state.firstMoviePoster
                  }
                  alt={"Poster of " + this.state.firstMovie}
                ></img>
                <div>4</div>
              </div>
            </div>
            <div>
              <div className="rounded-tr-2xl overflow-hidden">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w200" +
                    this.state.secondMoviePoster
                  }
                  alt={"Poster of " + this.state.secondMovie}
                ></img>
              </div>
              <div>5</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
