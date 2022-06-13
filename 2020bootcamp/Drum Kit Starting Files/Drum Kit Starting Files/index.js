const numberOfButtons = document.querySelectorAll('.drum');

function handleClick() {
    alert("I got clicked!");
}

// ForEach button in numberOfButtons, add an eventlistener to the current element that listens for click and fires handleClick when click is true
numberOfButtons.forEach(element => {
    element.addEventListener("click", handleClick);
});