(this.webpackJsonpscaena=this.webpackJsonpscaena||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var i=r(2),s=r.n(i),n=r(6),a=r.n(n),c=(r(15),r(5)),o=r(1),d=r.n(o),l=r(3),u=r(7),f=r(8),x=r(10),m=r(9),g=(r(17),r.p+"static/media/logo.7eabe318.svg"),v=r(0),h="bccb51a1a9d15a53bd655cea91f5ea51",p=function(e){Object(x.a)(r,e);var t=Object(m.a)(r);function r(e){var i;return Object(u.a)(this,r),(i=t.call(this,e)).handleFirstMovie=function(e){i.setState({firstMovie:e.target.value})},i.handleSecondMovie=function(e){i.setState({secondMovie:e.target.value})},i.handleSubmission=function(e){e.preventDefault(),console.log("Submit was clicked"),i.firstMovieRequest(),""!==i.state.secondMovie&&i.secondMovieRequest(),i.setState({firstMovieRenderedCrew:[],secondMovieRenderedCrew:[],isHidden:!1}),setTimeout((function(){i.scrollToResults.current.scrollIntoView({behavior:"smooth",block:"nearest"})}),700)},i.firstMovieRequest=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key="+h+"&language=en-US&query="+i.state.firstMovie+"&page=1&include_adult=yes").then((function(e){return e.json()}));case 2:t=e.sent,i.setState({firstMovieData:t,firstMovieID:t.results[0].id,firstMoviePoster:t.results[0].poster_path}),i.firstMovieCreditsRequest();case 5:case"end":return e.stop()}}),e)}))),i.firstMovieCreditsRequest=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(i.state.firstMovieID,"/credits?api_key=").concat(h,"&language=en-US")).then((function(e){return e.json()}));case 2:t=e.sent,i.setState({firstMovieCrew:t.crew}),i.RenderNamesFirstMovie();case 5:case"end":return e.stop()}}),e)}))),i.RenderNamesFirstMovie=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["Director","Producer","Screenplay","Original Music Composer","Costume Design","Director of Photography","Writer"],i.state.firstMovieCrew.forEach((function(e){t.includes(e.job)&&i.setState({firstMovieRenderedCrew:i.state.firstMovieRenderedCrew.concat(Object(c.a)({},e.job,[e.name]))})}));case 2:case"end":return e.stop()}}),e)}))),i.secondMovieRequest=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key="+h+"&language=en-US&query="+i.state.secondMovie+"&page=1&include_adult=yes").then((function(e){return e.json()}));case 2:t=e.sent,i.setState({secondMovieData:t,secondMovieID:t.results[0].id,secondMoviePoster:t.results[0].poster_path}),i.secondMovieCreditsRequest();case 5:case"end":return e.stop()}}),e)}))),i.secondMovieCreditsRequest=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(i.state.secondMovieID,"/credits?api_key=").concat(h,"&language=en-US")).then((function(e){return e.json()}));case 2:t=e.sent,i.setState({secondMovieCrew:t.crew}),i.RenderNamesSecondMovie();case 5:case"end":return e.stop()}}),e)}))),i.RenderNamesSecondMovie=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["Director","Producer","Screenplay","Original Music Composer","Costume Design","Director of Photography","Writer"],i.state.secondMovieCrew.forEach((function(e){t.includes(e.job)&&i.setState({secondMovieRenderedCrew:i.state.secondMovieRenderedCrew.concat(Object(c.a)({},e.job,[e.name]))})}));case 2:case"end":return e.stop()}}),e)}))),i.state={firstMovie:"",secondMovie:"",firstMovieData:[],secondMovieData:[],firstMovieID:"",secondMovieID:"",firstMovieCrew:[],secondMovieCrew:[],firstMoviePoster:"",secondMoviePoster:"",firstMovieRenderedCrew:[],secondMovieRenderedCrew:[],isHidden:!0},i.scrollToResults=s.a.createRef(),i}return Object(f.a)(r,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App container relative flex flex-col mx-auto bg-gray-800 text-center text-gray-100  items-center overflow-x-hidden w-screen"+(this.state.isHidden?"h-400":"h-250"),children:[Object(v.jsx)("div",{className:"h-24 w-24 rounded-full absolute -right-10 -top-10 bg-gray-700"}),Object(v.jsx)("div",{className:"h-44 w-44 rounded-full absolute -left-20 -top-20 bg-gray-700"}),Object(v.jsx)("div",{className:"Apptitle my-8 text-lg font-medium tracking-widest text-pink-200",children:"SCAENA"}),Object(v.jsx)("div",{className:"AppSubtitle mt-4 px-24 text-lg font-medium tracking-wide leading-relaxed",children:"Production Cast for Shows and Movies"}),Object(v.jsxs)("div",{className:"Searchbox container flex flex-col text-gray-800 bg-white content-center w-11/12 mx-auto my-12 pt-4 rounded-2xl  overflow-hidden",children:[Object(v.jsx)("div",{className:"flex LogoContainer",children:Object(v.jsx)("img",{src:g,className:"absolute h-44 -right-4 inset-y-25 transform -rotate-12",alt:"Two people watching on a couch watching a movie"})}),Object(v.jsx)("div",{className:"flex m-2 p-6 pt-24 text-lg font-medium tracking-wide leading-relaxed",children:"Enter Two Movies"}),Object(v.jsxs)("div",{className:"SearchItems box-border bg-gradient-to-tr from-pink-400 via-red-200 to-transparent object-cover h-full z-10",children:[Object(v.jsx)("input",{placeholder:"Enter First movie",className:"text-center py-2 mt-6 my-4 rounded-2xl bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-gray-300 focus:shadow-lg hover:bg-gray-700 text-gray-100",id:"movie1",type:"text",value:this.state.firstMovie,onChange:this.handleFirstMovie}),Object(v.jsx)("input",{placeholder:"Enter Second movie",className:"text-center py-2 my-4 rounded-2xl bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-gray-300 focus:shadow-lg hover:bg-gray-700 text-gray-100",id:"movie2",type:"text",value:this.state.secondMovie,onChange:this.handleSecondMovie}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"GoButton absolute bg-gray-700 hover:bg-gray-600 text-pink-300 font-bold py-2 px-4 rounded-2xl w-16",type:"submit",value:"Submit",onClick:this.handleSubmission.bind(this),children:"Go"})})]})]}),this.state.isHidden?null:Object(v.jsx)("div",{className:"ResultScreen bg-gray-200 Searchbox container flex flex-col text-gray-800 w-11/12 mx-auto my-12 rounded-2xl",children:Object(v.jsxs)("div",{className:"container grid grid-cols-3 overflow-hidden rounded-2xl ",children:[Object(v.jsx)("div",{className:"specialbox bg-gray-800"}),Object(v.jsx)("div",{className:"overflow-hidden",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+this.state.firstMoviePoster,alt:"Poster of "+this.state.firstMovie})}),Object(v.jsx)("div",{className:"overflow-hidden",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+this.state.secondMoviePoster,alt:"Poster of "+this.state.secondMovie})}),Object(v.jsx)("div",{className:"bg-gray-700 text-gray-200 text-lg font-medium tracking-wide leading-relaxed shadow-none -mt-12 flex justify-center items-center",children:"CREW"}),Object(v.jsx)("div",{className:""}),Object(v.jsx)("div",{className:""}),Object(v.jsx)("div",{className:"bg-red-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed",ref:this.scrollToResults,children:"Directors"}),Object(v.jsx)("div",{className:"flex  flex-col justify-center py-2 text-base font-medium tracking-wide leading-relaxed  text-left pl-0.5",children:this.state.firstMovieRenderedCrew.map((function(e){if(e.Director)return Object(v.jsx)("div",{className:"truncate",children:e.Director})}))}),Object(v.jsx)("div",{className:"bg-gray-300 flex justify-center  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.secondMovieRenderedCrew.map((function(e){if(e.Director)return Object(v.jsx)("div",{className:"truncate",children:e.Director})}))}),Object(v.jsx)("div",{className:"bg-pink-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed ",children:"Producers"}),Object(v.jsx)("div",{className:"flex flex-nowrap justify-center flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.firstMovieRenderedCrew.map((function(e){if(e.Producer)return Object(v.jsx)("div",{className:"truncate",children:e.Producer})}))}),Object(v.jsx)("div",{className:"bg-gray-300 flex justify-center flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5 ",children:this.state.secondMovieRenderedCrew.map((function(e){if(e.Producer)return Object(v.jsx)("div",{className:"truncate",children:e.Producer})}))}),Object(v.jsx)("div",{className:"bg-red-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed",children:"Screenplay"}),Object(v.jsx)("div",{className:"flex  flex-col justify-center py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.firstMovieRenderedCrew.map((function(e){return e.Screenplay?Object(v.jsx)("div",{className:"truncate",children:e.Screenplay}):e.Writer?Object(v.jsx)("div",{className:"truncate",children:e.Writer}):void 0}))}),Object(v.jsx)("div",{className:"bg-gray-300 flex justify-center  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.secondMovieRenderedCrew.map((function(e){return e.Screenplay?(console.log("Screenplay "+e.Screenplay),Object(v.jsx)("div",{className:"truncate",children:e.Screenplay})):e.Writer?Object(v.jsx)("div",{className:"truncate",children:e.Writer}):void 0}))}),Object(v.jsx)("div",{className:"bg-pink-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed",children:"Composers"}),Object(v.jsx)("div",{className:"flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.firstMovieRenderedCrew.map((function(e){if(e["Original Music Composer"])return Object(v.jsx)("div",{className:"truncate",children:e["Original Music Composer"]})}))}),Object(v.jsx)("div",{className:"bg-gray-300 flex justify-center  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.secondMovieRenderedCrew.map((function(e){if(e["Original Music Composer"])return Object(v.jsx)("div",{className:"truncate",children:e["Original Music Composer"]})}))}),Object(v.jsx)("div",{className:"bg-red-200 flex justify-center items-center py-2 text-lg font-medium tracking-wide leading-relaxed",children:"Costume"}),Object(v.jsx)("div",{className:"flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.firstMovieRenderedCrew.map((function(e){if(e["Costume Design"])return Object(v.jsx)("div",{className:"truncate",children:e["Costume Design"]})}))}),Object(v.jsx)("div",{className:"bg-gray-300 flex justify-center   flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.secondMovieRenderedCrew.map((function(e){if(e["Costume Design"])return Object(v.jsx)("div",{className:"truncate",children:e["Costume Design"]})}))}),Object(v.jsx)("div",{className:"bg-pink-200 flex justify-center items-center  py-2 text-lg font-medium tracking-wide leading-relaxed",children:"Photography"}),Object(v.jsx)("div",{className:"flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.firstMovieRenderedCrew.map((function(e){if(e["Director of Photography"])return Object(v.jsx)("div",{className:"truncate",children:e["Director of Photography"]})}))}),Object(v.jsx)("div",{className:"bg-gray-300 flex  flex-col py-2 text-base font-medium tracking-wide leading-relaxed text-left pl-0.5",children:this.state.secondMovieRenderedCrew.map((function(e){if(e["Director of Photography"])return Object(v.jsx)("div",{className:"truncate",children:e["Director of Photography"]})}))})]})}),Object(v.jsx)("div",{className:"text-center text-white w-screen text-lg font-medium tracking-wide leading-relaxed pb-3",children:Object(v.jsx)("a",{href:"https://github.com/aindoria",children:"INDORIA LABS NORTH AMERICA"})})]})}}]),r}(i.Component),b=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),i(e),s(e),n(e),a(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(p,{})}),document.getElementById("root")),b()}},[[19,1,2]]]);
//# sourceMappingURL=main.d91fb60b.chunk.js.map