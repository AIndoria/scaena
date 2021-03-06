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
    };
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
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&language=en-US&query=" +
        this.state.firstMovie +
        "&page=1&include_adult=yes"
    )
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState(
          {
            firstMovieData: jsonData,
            firstMovieID: jsonData.results[0].id,
          },
          () => {
            console.log(this.state.firstMovieData);
            console.log(this.state.firstMovieID);
          }
        );
      })
      .then
      // fetch(
      //   `https://api.themoviedb.org/3/movie/${this.state.firstMovieID}/credits?api_key=${API_KEY}&language=en-US`
      // )
      //   .then((res) => res.json())
      //   .then((jsonData) => {
      //     this.setState(
      //       {
      //         firstMovieCrew: jsonData,
      //       },
      //       () => {
      //         console.log(this.state.firstMovieCrew);
      //       }
      //     );
      //   })
      ();
    if (this.state.secondMovie !== "") {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          API_KEY +
          "&language=en-US&query=" +
          this.state.secondMovie +
          "&page=1&include_adult=yes"
      )
        .then((res) => res.json())
        .then((jsonData) => {
          this.setState(
            {
              secondMovieData: jsonData,
              secondMovieID: jsonData.results[0].id,
            },
            () => {
              console.log(this.state.secondMovieData);
              console.log(this.state.secondMovieID);
            }
          );
        });
    }
  };

  // handleSubmission = (e) => {
  //   e.preventDefault();
  // const sendInputData = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(this.state),
  // };
  //   fetch("/coinvalue", sendInputData);
  //   fetch("/api/sum")
  //     .then((res) => res.json())
  //     .then((jsonData) => {
  //       this.setState({
  //         isLoaded: true,
  //         changeReceived: jsonData,
  //       });
  //     });
  // };

  render() {
    return (
      <div className="App container flex flex-col mx-auto bg-gray-800 text-center text-gray-100 h-screen items-center overflow-none">
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
        <div className="text-white">
          {this.state.firstMovie} and {this.state.secondMovie}
        </div>
        <div className="text-gray-200"></div>
      </div>
    );
  }
}

export default App;
