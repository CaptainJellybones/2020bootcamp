$("h1").css('color', 'red');
$("a").attr("href", "https://google.se");


$(document).keypress(function(event) {
    $("h1").text(event.key);
});