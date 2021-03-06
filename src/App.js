import "./App.css";
import logo from "./img/logo.svg";

function App() {
  return (
    <div className="App container flex flex-col mx-auto bg-gray-800 text-center text-gray-100 h-screen items-center">
      <div className="h-24 w-24 rounded-full absolute -right-10 -top-10 bg-gray-700"></div>
      <div className="h-44 w-44 rounded-full absolute -left-20 -top-20 bg-gray-700"></div>
      <div className="Apptitle my-8 text-lg font-medium tracking-widest text-pink-200">
        SCAENA
      </div>
      <div className="AppSubtitle mt-4 px-24 text-lg font-medium tracking-wide leading-relaxed">
        Production Cast for Shows and Movies
      </div>
      <div className="Searchbox container flex flex-col text-gray-800 bg-white content-center w-11/12 mx-auto my-12 pt-4 rounded-2xl h-2/5 overflow-hidden">
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
            className="text-center py-2 mt-6 my-4 rounded-2xl bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-gray-300 focus:shadow-lg hover:bg-gray-700"
          ></input>
          <input
            placeholder="Enter Second movie"
            className="text-center py-2 my-4 rounded-2xl bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-gray-300 focus:shadow-lg hover:bg-gray-700 "
          ></input>
          <div>
            <button className="absolute bg-gray-700 hover:bg-gray-600 text-pink-300 font-bold py-2 px-4 rounded-2xl w-16 -mx-8 ">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
