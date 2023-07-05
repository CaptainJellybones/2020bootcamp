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



console.log($("img").attr("src"));