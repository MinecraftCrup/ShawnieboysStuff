// Navigation Bar
var portfolio = document.getElementById("portfolio");
var client = document.getElementById("client");
var entertainment = document.getElementById("tainment");

function clearPage() {
  document.getElementsByClassName("client")[0].style.display = "none"
  document.getElementsByClassName("portfolio")[0].style.display = "none"
  document.getElementsByClassName("entertainment")[0].style.display = "none"
}

portfolio.addEventListener("click", function showPortfolio(){
  clearPage();
  document.getElementsByClassName("portfolio")[0].style.display = "block"
})
client.addEventListener("click", function showClient(){
  clearPage();
  document.getElementsByClassName("client")[0].style.display = "block"
})


// Portfolio Page
var yr = 2026; // This is the year that is featured first.
const goodyrs = [2026,];

function checkbtn() {
  if (goodyrs.indexOf(yr) == 0) { // w/ other words if it the last or first item
    Backward.setAttribute("disabled","");
  } else {
    Backward.removeAttribute("disabled");
  }
  if (goodyrs.indexOf(yr) == goodyrs.length - 1) {
    Forward.setAttribute("disabled","");
  } else {
    Forward.removeAttribute("disabled");
  }
}
function displayyr(hmm) {
  if (hmm == "+") {
    yr++; checkbtn();
  }
  if (hmm == "-") {
    yr--; checkbtn();
  }

  document.getElementById("yr").innerHTML = yr;
  
  try {
    displaymon();
    var video = "//www.youtube.com/embed/" + stuff[yr]["videoid"] + "?fs=0&rel=0&autoplay=1&muted=1&showinfo=0";
    document.getElementsByClassName("reel")[0].setAttribute("src", video);
  }
  catch (e) {};
}

var Backward = document.getElementById("←"); // That is the ← button
var Forward = document.getElementById("→"); // the → button

checkbtn(); displayyr();
Backward.addEventListener("click", function forward(){
  displayyr("-"); 
});
Forward.addEventListener("click", function forward(){
  displayyr("+");  
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const stuff = {
  2026:{
    1:["Made this Website", ],
    videoid:"",
  },
}

var shownmon = 0;
function displaymon(hmm) {
  if (hmm == "+") {
    shownmon++;
  };
  if (hmm == "-") {
    shownmon--;
  };

  document.getElementById("mo").innerHTML = months[Object.keys(stuff[yr])[shownmon]];
  
  { //
  let input = '<ul class="achv">';
  for (let c = 0; c < Object.values(stuff[yr])[shownmon].length; c++) {
    input +=
      '<li>' + Object.values(stuff[yr])[shownmon][c] + '</li>';
  };
  input += '</ul>'
  document.getElementsByClassName("yrtroph")[0].innerHTML = input;
  console.log(input)
  }
}

displaymon();

var Backward2 = document.getElementById("←2");
var Forward2 = document.getElementById("→2");

function checkbtn2 (){
  if (shownmon == 0) {
    Backward2.setAttribute("disabled","");
  } else {
    Backward2.removeAttribute("disabled");
  };
  if (shownmon == Object.keys(stuff[yr]).length - 2) {
    Forward2.setAttribute("disabled","")
  } else {
    Forward2.removeAttribute("disabled")
  };
}

checkbtn2();

Forward2.addEventListener("click", function (){
  displaymon("+"); checkbtn2();
});
Backward2.addEventListener("click", function (){
  displaymon("-"); checkbtn2();
});

// Entertaintment Page
entertainment.addEventListener("click", function showEntertainment(){
  clearPage();
  
  // Display the Entertainment Section
  document.getElementsByTagName("body")[0].style.paddingInline = 0
  document.getElementsByClassName("entertainment")[0].style.display = "block";
  displayFeaturedFilms();
  
})

function displayFeaturedFilms() {
  var current_priority; current_priority = 1;
  var movies; movies = Object.keys(movie_box);
  
  current_priority = 1;
  while (current_priority < (movies["length"] + 1)) {
    movies.forEach(check);
    current_priority ++;
  }

  function check (movie) {
    console.log(movie_box[movie]["priority"]);
    if (movie_box[movie]["priority"] === current_priority) {
      var movie_clickable;
      movie_clickable = 
      "<div>" +
        `<img class="movie-clickable" title="` + movie_box[movie]["title"] + `" src="images/ + movie_box[movie]["thumbnail"] + ">` +
      "<div>";
      document.getElementsByClassName("listofshows")[0].innerHTML += movie_clickable;
    };
  }
}

var movie_box = {
  "Crup's Adventure": {
    "title":"Crup's Adventure",
    "description":"The story of a lazy Mineacraft Boy becoming a man.",
    "thumbnail":"" ,
    "logo":"",
    "créme":true,
    "priority": 2,
    },
  "Untitled Beyblade Series": {
    "title":"",
    "description":"Shawn and Neri travel to America to compete in a beyblade tournament.",
    "thumbnail":"beyblade.png",
    "logo":"",
    "créme":true,
    "priority": 1,
    },
  "Untitled School Bully Series": {
    "title":"",
    "description":".",
    "thumbnail":"",
    "logo":"",
    "créme":true,
    "priority": 4,
    },
  "Nano VS Giga": {
    "title":"Nano VERSUS Giga",
    "description":".",
    "thumbnail":"",
    "logo":"",
    "créme":false,
    "priority": 3,
    },
}

