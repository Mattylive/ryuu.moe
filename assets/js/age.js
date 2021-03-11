var DOB = "January 23, 2006";
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;

  var milliseconds = ageInMilliseconds;
  var second = 1000;
  var minute = second*60;
  var hour = minute*60;
  var day = hour*24;
  var month = day*30;
  var year = day*365;

var years = Math.round(milliseconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(milliseconds/hour);
var seconds = Math.round(milliseconds/second);


function printResults(){
  var message = ""+years+"."+milliseconds+""
  document.getElementById('age').innerHTML = message;
}

window.onload = printResults;
