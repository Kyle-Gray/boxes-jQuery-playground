//write your code here
"use strict";
$(document).ready(function(){
  console.log("ready");
  // exercise 1
  $("#secretBox").css("background", "white");
  $("#secretBox").append($("<h1>Secret Box!</h1>"));
  //exercise 2
  // $(".boxType1").css("background", "white");
  $(".box").each(function(){
    if($(this).css("background-color") === "rgb(255, 0, 0)"){
    $(this).attr("style", "background-color: purple");
  }
  });


});
