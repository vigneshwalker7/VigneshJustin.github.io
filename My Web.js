//enable visibility of menubar div
function bornmenu() {
  document.getElementById('menubar').style.display="block";
}
//visibility of menubar div when mouse is over the div
function show() {
   document.getElementById('menubar').style.display="block";
}
//hides the visibility of menubar div when mouse is out from the div
function hidemenu() {
  document.getElementById('menubar').style.display="none";
}
//didn't show the menubar div when mouse is out
function kill() {
  hidemenu();
}
//heading change: method 1 is acive now
function changeheading(heading) {
  if ( heading == "home") {
    document.getElementsByTagName('h1')[1].innerHTML="HOME";
    document.getElementsByTagName('div')[0].className="hometap";
    document.getElementsByTagName('iframe')[0].setAttribute("src","home.html");
    //document.getElementById('borderquote').className="borderquote";
  }else if ( heading == "portfolio") {
    document.getElementsByTagName('h1')[1].innerHTML="PORTFOLIO";
    document.getElementsByTagName('div')[0].className="portfoliotap";
    document.getElementsByTagName('iframe')[0].setAttribute("src","portfolio.html");
  }else if ( heading == "resume") {
    document.getElementsByTagName('h1')[1].innerHTML="RESUME";
    document.getElementsByTagName('div')[0].className="resumetap";
    document.getElementsByTagName('iframe')[0].setAttribute("src","resume.html");
  }else if ( heading == "hire me") {
    document.getElementsByTagName('h1')[1].innerHTML="HIRE ME";
    document.getElementsByTagName('div')[0].className="hiremetap";
    document.getElementsByTagName('iframe')[0].setAttribute("src","hire.html");
  }
}
//date and time fnction
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timer').innerHTML = h + "<small style='color:white'>H</small>" + ":" + m + "<small style='color:white'>M</small>" + ":" + s + "<small style='color:white'>S</small>";
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
//for day function
function myday() {
  var mydays = ["Weekend","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var quotes = ["Nothing is impossible when God is on your side.","The biggest risk is not taking any risk.","Be my best friend.","Friendship is what makes life worth living.","Be willing to be a beginner every single day.","I hope your day is as bright as your smile.","Have a nice day.","Have a good day.","Have a great day.","Another beautiful day is here.","Love yourself and Be yourself.","Wishing you a great Day.","I\'m happy to wish you a nice day as it charms my Heart.","My day is incomplete without wishing you.","Smile is the greatest possession.","Everything you need is already inside you, Get started."];
  var date = new Date();
  var today = date.getDay();
  var Qlength = quotes.length;
  var Qrandom = Math.floor(Math.random() * Qlength);
  document.getElementsByTagName('p')[0].innerHTML = "Happy" + " " + mydays[today] +"!" + " " + quotes[Qrandom];
}
//get curent Year for details section
function copyright() {
  var date = new Date();
var year = date.getFullYear();
document.getElementById('copyright').innerHTML = year;
}
//jquery menubar scrolling hide effect
$(window).scroll(function(){
  if($(document).scrollTop() > 1){
    $('#menubar').css({'display': 'none'});
  }
});
