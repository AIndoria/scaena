import "./App.css";
import logo from "./img/logo.svg";
import React, { Component } from "react";
import ReactGA from "react-ga";

const API_KEY = process.env.REACT_APP_MDB_API_KEY; //Absolutely not secure, consider doing it on a backend Express server for actual API keys that cost money. This one is rate limited and free so it doesn't matter.

const TRACKING_ID = "G-C9451NGMHL";
ReactGA.initialize(TRACKING_ID);

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
      firstMovieRenderedCrew: [],
      secondMovieRenderedCrew: [],
      isHidden: true,
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

    this.setState({
      firstMovieRenderedCrew: [],
      secondMovieRenderedCrew: [],
      isHidden: false,
    });
    setTimeout(() => {
      this.scrollToResults.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 700);
  };

  firstMovieRequest = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&language=en-US&query=" +
        this.state.firstMovie +
        "&page=1&include_adult=yes"
    ).then((response) => response.json());
    this.setState({
      firstMovieData: movieData,
      firstMovieID: movieData.results[0].id,
      firstMoviePoster: movieData.results[0].poster_path,
    });
    this.firstMovieCreditsRequest();
  };

  firstMovieCreditsRequest = async () => {
    const movieCredits = await fetch(
      `https://api.themoviedb.org/3/movie/${this.state.firstMovieID}/credits?api_key=${API_KEY}&language=en-US`
    ).then((response) => response.json());
    this.setState({
      firstMovieCrew: movieCredits.crew,
    });
    this.RenderNamesFirstMovie();
  };

  RenderNamesFirstMovie = async () => {
    let jobs = [
      "Director",
      "Producer",
      "Screenplay",
      "Original Music Composer",
      "Costume Design",
      "Director of Photography",
      "Writer",
    ];
    this.state.firstMovieCrew.forEach((crewMember) => {
      if (jobs.includes(crewMember.job)) {
        this.setState({
          firstMovieRenderedCrew: this.state.firstMovieRenderedCrew.concat({
            [crewMember.job]: [crewMember.name],
          }),
        });
      }
    });
  };

  secondMovieRequest = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&language=en-US&query=" +
        this.state.secondMovie +
        "&page=1&include_adult=yes"
    ).then((response) => response.json());
    this.setState({
      secondMovieData: movieData,
      secondMovieID: movieData.results[0].id,
      secondMoviePoster: movieData.results[0].poster_path,
    });
    this.secondMovieCreditsRequest();
  };

  secondMovieCreditsRequest = async () => {
    const movieCredits = await fetch(
      `https://api.themoviedb.org/3/movie/${this.state.secondMovieID}/credits?api_key=${API_KEY}&language=en-US`
    ).then((response) => response.json());
    this.setState({
      secondMovieCrew: movieCredits.crew,
    });
    this.RenderNamesSecondMovie();
  };

  RenderNamesSecondMovie = async () => {
    let jobs = [
      "Director",
      "Producer",
      "Screenplay",
      "Original Music Composer",
      "Costume Design",
      "Director of Photography",
      "Writer",
    ];
    this.state.secondMovieCrew.forEach((crewMember) => {
      if (jobs.includes(crewMember.job)) {
        this.setState({
          secondMovieRenderedCrew: this.state.secondMovieRenderedCrew.concat({
            [crewMember.job]: [crewMember.name],
          }),
        });
      }
    });
  };

  render() {
    return (
      <div
        className={
          "App container relative flex flex-col mx-auto bg-gray-800 text-center text-gray-100  items-center overflow-x-hidden w-screen" +
          (this.state.isHidden ? "h-400" : "h-250")
        }
      >
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
            Enter Two Movies
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
        {this.state.isHidden ? null : (
          <div className="ResultScreen bg-gray-200 Searchbox container flex flex-col text-gray-800 w-11/12 mx-auto my-12 rounded-2xl">
            <div className="container grid grid-cols-3 overflow-hidden rounded-2xl ">
              <div className="specialbox bg-gray-800"></div>
              <div className="overflow-hidden">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w200" +
                    this.state.firstMoviePoster
                  }
                  alt={"Poster of " + this.state.firstMovie}
                ></img>
              </div>
              <div className="overflow-hidden">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w200" +
                    this.state.secondMoviePoster
                  }
                  alt={"Poster of " + this.state.secondMovie}
                ></img>
              </div>
              <div className="bg-gray-700 text-gray-200 text-lg font-medium tracking-wide leading-relaxed shadow-none -mt-12 flex justify-center items-center">
                CREW
              </div>
              <div className=""></div>
              <div className=""></div>
              <div
                className="bg-red-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed"
                ref={this.scrollToResults}
              >
                Directors
              </div>
              <div className="flex  flex-col justify-center py-2 text-base font-medium tracking-wide leading-relaxed  text-left pl-0.5">
                {this.state.firstMovieRenderedCrew.map((element) => {
                  if (element.Director) {
                    return <div className="truncate">{element.Director}</div>;
                  }
                })}
              </div>
              <div className="bg-gray-300 flex justify-center  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.secondMovieRenderedCrew.map((element) => {
                  if (element.Director) {
                    return <div className="truncate">{element.Director}</div>;
                  }
                })}
              </div>
              <div className="bg-pink-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed ">
                Producers
              </div>
              <div className="flex flex-nowrap justify-center flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.firstMovieRenderedCrew.map((element) => {
                  if (element.Producer) {
                    return <div className="truncate">{element.Producer}</div>;
                  }
                })}
              </div>
              <div className="bg-gray-300 flex justify-center flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5 ">
                {this.state.secondMovieRenderedCrew.map((element) => {
                  if (element.Producer) {
                    return <div className="truncate">{element.Producer}</div>;
                  }
                })}
              </div>
              <div className="bg-red-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed">
                Screenplay
              </div>
              <div className="flex  flex-col justify-center py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.firstMovieRenderedCrew.map((element) => {
                  if (element.Screenplay) {
                    return <div className="truncate">{element.Screenplay}</div>;
                  } else if (element.Writer) {
                    return <div className="truncate">{element.Writer}</div>;
                  }
                })}
              </div>
              <div className="bg-gray-300 flex justify-center  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.secondMovieRenderedCrew.map((element) => {
                  if (element.Screenplay) {
                    console.log("Screenplay " + element.Screenplay);
                    return <div className="truncate">{element.Screenplay}</div>;
                  } else if (element.Writer) {
                    return <div className="truncate">{element.Writer}</div>;
                  }
                })}
              </div>
              <div className="bg-pink-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed">
                Composers
              </div>
              <div className="flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.firstMovieRenderedCrew.map((element) => {
                  if (element["Original Music Composer"]) {
                    return (
                      <div className="truncate">
                        {element["Original Music Composer"]}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="bg-gray-300 flex justify-center  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.secondMovieRenderedCrew.map((element) => {
                  if (element["Original Music Composer"]) {
                    return (
                      <div className="truncate">
                        {element["Original Music Composer"]}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="bg-red-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed">
                Costume
              </div>
              <div className="flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.firstMovieRenderedCrew.map((element) => {
                  if (element["Costume Design"]) {
                    return (
                      <div className="truncate">
                        {element["Costume Design"]}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="bg-gray-300 flex justify-center   flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.secondMovieRenderedCrew.map((element) => {
                  if (element["Costume Design"]) {
                    return (
                      <div className="truncate">
                        {element["Costume Design"]}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="bg-pink-200 flex justify-center items-center  py-2 text-lg font-medium tracking-wide leading-relaxed">
                Photography
              </div>
              <div className="flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.firstMovieRenderedCrew.map((element) => {
                  if (element["Director of Photography"]) {
                    return (
                      <div className="truncate">
                        {element["Director of Photography"]}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="bg-gray-300 flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5">
                {this.state.secondMovieRenderedCrew.map((element) => {
                  if (element["Director of Photography"]) {
                    return (
                      <div className="truncate">
                        {element["Director of Photography"]}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
        <div className="text-center text-white w-screen text-lg font-medium tracking-wide leading-relaxed pb-3">
          <a href="https://github.com/aindoria">INDORIA LABS NORTH AMERICA</a>
        </div>
      </div>
    );
  }
}

export default App;
