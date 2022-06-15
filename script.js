//Define vars to hold time values
let seconds = 0;
let minutes = 7;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 7;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";
var myAudio = new Audio('alarm.mp3');
myAudio.loop = false;

function useRestTimer30() {
   seconds = 30;
   minutes = 0;
   displaySeconds = 30;
   displayMinutes = 0;
   status = "stopped";
   window.clearInterval(interval);
   document.getElementById("display").innerHTML = "00:30";
   document.getElementById("startStop").innerHTML = "START";
}

function useRestTimer60() {
   seconds = 0;
   minutes = 1;
   displaySeconds = 0;
   displayMinutes = 1;
   status = "stopped";
   window.clearInterval(interval);
   document.getElementById("display").innerHTML = "01:00";
   document.getElementById("startStop").innerHTML = "START";
}

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {

   if (seconds === 0 && minutes === 0) {
      myAudio.play();
      startStop();
   } else {
      if (seconds === 0 && minutes !== 0) {
         seconds = 59;
         minutes--;
      } else {
         seconds--;
      }

      //If seconds/minutes are only one digit, add a leading 0 to the value
      if (seconds < 10) {
         displaySeconds = "0" + seconds.toString();
      } else {
         displaySeconds = seconds;
      }

      if (minutes < 10) {
         displayMinutes = "0" + minutes.toString();
      } else {
         displayMinutes = minutes;
      }

   }

   //Display updated time values to user
   document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;

}


function startStop() {

   if (status === "stopped") {

      //Start the stopwatch (by calling the setInterval() function)
      interval = window.setInterval(stopWatch, 1000);
      document.getElementById("startStop").innerHTML = "STOP";
      status = "started";

   } else {

      window.clearInterval(interval);
      document.getElementById("startStop").innerHTML = "START";
      status = "stopped";

   }

}

//Function to reset the stopwatch
function reset() {

   window.clearInterval(interval);
   seconds = 0;
   minutes = 7;
   document.getElementById("display").innerHTML = "07:00";
   document.getElementById("startStop").innerHTML = "START";

}


// Image gallery

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
   showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("demo");
   let captionText = document.getElementById("caption");
   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   captionText.innerHTML = dots[slideIndex - 1].alt;
}