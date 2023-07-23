$(document.re)
//below is bad practice, generally
$("h1").css('color', 'red');

// add CSS Classes
$("button").addClass("big");

//does this have class? 
console.log($("h1").hasClass("peepeepoopoo"));

/*
.text can be used to change the text of an element
.html can be used to change the HTML of an element
*/ 

$("h1").text("Bruh watch your jet!");
$("button").html("<em>Hey</em>");

// Add a button that removes buttons and a href that toggles to reload the page
$("body").append("<button id='buttonRemover'>Remove all the buttons</button>");
$("#buttonRemover").on("click", function(){
    $("button").animate({width:'toggle'},350);
    // $("a").slideUp().slideDown();
})


console.log($("img").attr("src"));