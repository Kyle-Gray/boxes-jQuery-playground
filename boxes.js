//write your code here
"use strict";
$(document).ready(function(){
  console.log("ready");
  // exercise 1
  // $("#secretBox").css("background", "white");
  // $("#secretBox").append($("<h1>Secret Box!</h1>"));

  //exercise 2
  // method 1
  // $(".boxType1").css("background", "white");
  // method 2
  // $(".box").each(function(){
  //   if($(this).css("background-color") === "rgb(255, 0, 0)"){
  //   $(this).attr("style", "background-color: white");
  // }
  // });

  // exercise 3
  //method 1
  //  $("#row1").children().removeClass().addClass("box boxType3");
  // method 2
  // $("#row1").children().each(function(){
  //   $(this).removeClass().addClass("box boxType3");
  // });

  // exercise 4
  // $("#row4").children().last().css("display", "none");

  // exercise 5
  // var twoDivs = $("#row2").children().slice(0,2);
  // twoDivs.removeAttr("style");
  // twoDivs.removeAttr("class");
  // console.log(twoDivs);

  // exercise 6
  // $("#container .box:not(#secretBox)").css("width", "2px");
  // console.log($("div.box").first().width()== 2);

  // exercise 7
  // var body = $("body");
  // body.toggle(250);
  // body.toggle(5000);
  // exercise 8
  // $(".row").each(function(){
  //   $(this).children().eq(2).hide();
  // });

  //exercise 9
  // $("#container").css("height", "100%");
  // var row = $("#row1").clone();
  // $("#container").append(row);
  // console.log($(".box").length);
  // addRows(row, 25);

  //exercise 10
  $(".row").each(function(){
  if($(this).children().attr("class").includes("boxType1")){
    $(this).children().first().remove();
  }
});
});

// function addRows(row, numofrows){
//   for(var i=0; i<numofrows; i++){
//     $("#container").append(row.clone());
//   }
// }
