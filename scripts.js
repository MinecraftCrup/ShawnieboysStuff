function select(element) {
  return document.querySelector(element);
}

getOS();
function getOS() {
  var userAgent = window.navigator.userAgent;
  var platform = window.navigator.platform;
  var os = "Unknown";

  if (platform.indexOf('Win') !== -1) os = "Windows";
  else if (platform.indexOf('Mac') !== -1) os = "MacOS";
  else if (platform.indexOf('Linux') !== -1) os = "Linux";
  else if (/Android/.test(userAgent)) os = "Android";
  else if (/iPhone|iPad|iPod/.test(userAgent)) os = "iOS";

  console.log(os)
  return os;
}

window.addEventListener("load", function() {
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  blurrer("hide");  
  function blurrer(action) {
    if (action === "hide") {
      select(".blurrer").style.display = "none";
    }
    if (action === "show") {
      select(".blurrer").style.display = "block";
    }
  }

  var header = select("header");
  function clearPage() {
    select(".client").style.display = "none"
    select(".portfolio").style.display = "none"
    select(".entertainment").style.display = "none"
  }

  var online;
  if (window.location.host === "minecraftcrup.github.io"){
  online = true;
  }
  else {
  online = false; 
  }
  
  var contactBoxHidden = true
  function setVisuals() {
    if (windowWidth <= 560) {
      // Header
      header.style.gap = "0px";
      header.style.justifyContent = "space-evenly";
      // Contact Box
      contactBox.style.left = [(windowWidth - contactBox.offsetWidth)/2, "px"].join("");
      if (contactBoxHidden === true) {
        hideContactBox("mobile")
      }
      if (contactBoxHidden === false) {
        showContactBox("mobile")
      }
    }
    if (windowWidth > 560) {
      // Contact Box
      if (contactBoxHidden === true) {
        hideContactBox("desktop")
      }
      if (contactBoxHidden === false) {
        showContactBox("desktop")
      }
      contactBox.removeAttribute("style");
      contactBox.style.right = "15px";
      if (windowWidth > windowHeight) {
        // Header
        header.style.gap = "40px";
        header.style.justifyContent = "end";
      }
      else {
        header.style.gap = "40px";
        header.style.justifyContent = "center";
      }
    }
  }

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
window.addEventListener("resize", function() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  setVisuals();
});

// On Start
  var contactBox = select(".contact-box");
  var hideRight = select(".hide-contact-box-right");
  var hideDown = select(".hide-contact-box-down");
  var showUp = select(".show-contact-box-up");
  var mainContactBox = select(".main-contact-box");

  setVisuals();
// Contact Box
  
  function showContactBox(device, special) {
    contactBoxHidden = false;
    showUp.style.display = "none";
    
    if (device == "mobile") {
      blurrer("show");
      hideRight.style.display = "none";
      hideDown.style.display = "flex";
      contactBox.style.display = "block";
      }
     if (device === "desktop") {
        mainContactBox.style.display = "block"
        hideRight.style.display = "flex";
        hideDown.style.display = "none";
      } 
  }
  function hideContactBox(device) {
      contactBoxHidden = true;
      if (device === "mobile") {
        blurrer("hide");
        showUp.style.display = "flex"
        contactBox.style.display = "none"
      }
      if (device ==="desktop") {
        showUp.style.display = "none"
        mainContactBox.style.display = "none"
        hideDown.style.display = "none";
        hideRight.style.display = "flex";
        hideRight.src = "images/caret-left.svg";
      }
  }
  
  hideRight.addEventListener("click", function hideContactBoxRight() {
    if (contactBoxHidden === true) {
      showContactBox("desktop");
      hideRight.src = "images/caret-right.svg";
    } 
    else {
      hideContactBox("desktop");
      hideRight.src = "images/caret-left.svg";
    }
  })  
  hideDown.addEventListener("click", function hideContactBoxDown() {
    hideContactBox("mobile");
  })
  showUp.addEventListener("click", function showContactBoxUp() {
    showContactBox("mobile");
    setVisuals();
  });

  // Achievments
    // System Setup
      var featuredYear = 2026;
      var achievments = {
        2026: {
                  2: ["Made this website", ],
                  videoID:"",
                },
      }
      var achievmentYears = Object.keys(achievments);
      achievmentYears.forEach(function(year, index) {
        achievmentYears[index] = +year;
      });
      var displayedMonth = 0;
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var noVideoToDisplayMessage;

    // Functionalities
      var previousYearButton = select("#←");
      var nextYearButton = select("#→");

      function updateYearButtons() {
        if (achievmentYears.indexOf(featuredYear) == 0) { // w/ other words if it the last or first item
          previousYearButton.setAttribute("disabled","");
        } else {
          previousYearButton.removeAttribute("disabled");
        }
        if (achievmentYears.indexOf(featuredYear) == achievmentYears.length - 1) {
          nextYearButton.setAttribute("disabled","");
        } else {
          nextYearButton.removeAttribute("disabled");
        }
      }

      function displayYear(action) {
        if (action == "+") {
          featuredYear++;
          updateYearButtons();
        }
        if (action == "-") {
          featuredYear--;
          updateYearButtons();
        }
        select("#yr").innerHTML = featuredYear;
        displayMonth();
        if (achievments[featuredYear]["videoID"] == "") {
          noVideoToDisplayMessage = `<div style="color: white; text-align: center">There is no video showcase<br>for ` + featuredYear + `.</div>`;
          select(".reel").innerHTML = noVideoToDisplayMessage;
        }
        else {          
          try {            
            select(".reel").innerHTML = "<iframe></iframe>"
            var displayedVideo = "//www.youtube.com/embed/" + achievments[featuredYear]["videoID"] + "?fs=0&rel=0&autoplay=1&muted=1&showinfo=0";
            select(".reel").select(".reel").setAttribute("src", displayedVideo);
          }
          catch (e) {
          };
        }
      }
        
      updateYearButtons();
      displayYear();

      previousYearButton.addEventListener("click", function forward(){
        if (!(previousYearButton.hasAttribute("disabled"))) {
          displayYear("-");
        }
      });

      nextYearButton.addEventListener("click", function forward(){
        if (!(nextYearButton.hasAttribute("disabled"))) {
          displayYear("+");
        }
      });

      displayMonth();
      function displayMonth(action) {
        if (action == "+") {
          displayedMonth++;
        };
        if (action == "-") {
          displayedMonth--;
        };

        select("#mo").innerHTML = months[Object.keys(achievments[featuredYear])[displayedMonth] - 1];
        
        let achievmentList = '<ul class="achv">';
        console.log(displayedMonth)
        for (let c = 0; c < Object.values(achievments[featuredYear])[displayedMonth].length; c++) {
          achievmentList +=
          '<li>' + Object.values(achievments[featuredYear])[displayedMonth][c] + '</li>';
        };
        achievmentList += '</ul>'
        select(".achievmentListContainer").innerHTML = achievmentList;
      }

      var previousMonthButton = select("#←2");
      var nextMonthButton = select("#→2");

      updateMonthButtons();
      function updateMonthButtons (){
        if (displayedMonth == 0) {
          previousMonthButton.setAttribute("disabled","");
        }
        else {
          previousMonthButton.removeAttribute("disabled");
        }
        if (displayedMonth == Object.keys(achievments[featuredYear]).length - 2) {
        nextMonthButton.setAttribute("disabled","")
        } 
        else {
          nextMonthButton.removeAttribute("disabled")
        };
      }
      nextMonthButton.addEventListener("click", function (){
        if (!(nextMonthButton.hasAttribute("disabled"))) {
          displayMonth("+"); updateMonthButtons();
        }
      });
      previousMonthButton.addEventListener("click", function (){
      if (!(previousMonthButton.hasAttribute("disabled"))) {
          displayMonth("-"); updateMonthButtons();
        }
      });

      var achievmentsHeaderButton = document.getElementById("portfolio");
      achievmentsHeaderButton.addEventListener("click", function showPortfolio(){
      clearThePage();
      select("#portfolio")[0].style.display = "block"
      })

// Client Page
  var client = document.getElementById("client");
  if (online === false) {
  client.addEventListener("click", function showClient(){
    clearThePage();
    select(".client")[0].style.display = "block"
  })
  }

// Entertaintment Page
  var entertainment = document.getElementById("entertainment");
  if (online === false) {
  entertainment.addEventListener("click", function showEntertainment(){
    clearThePage();
  
    // Display the Entertainment Section
    document.getElementsByTagName("body")[0].style.paddingInline = 0;
    document.getElementsByClassName("entertainment")[0].style.display = "block";
    window.document.querySelector("");
  })
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
  displayFeaturedFilms();
  function displayFeaturedFilms() {
    var current_priority; current_priority = 1;
    var movies; movies = Object.keys(movie_box);
  
    current_priority = 1;
    while (current_priority < (movies["length"] + 1)) {
      movies.forEach(check);
      current_priority ++;
    }

    function check (movie) {
      if (movie_box[movie]["priority"] === current_priority) {
        var movie_clickable;
        movie_clickable =  
        "<div>" +
          `<img class="movie-clickable btn" title="` + movie_box[movie]["title"] + `" src="images/` + movie_box[movie]["thumbnail"] + `">` +
        "<div>";
        document.getElementsByClassName("listofshows")[0].innerHTML += movie_clickable;
      };
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});