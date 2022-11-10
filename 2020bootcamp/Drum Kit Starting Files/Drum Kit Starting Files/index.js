const numberOfButtons = document.querySelectorAll('.drum');
const audio = ['./sounds/crash.mp3', './sounds/kick-bass.mp3', './sounds/snare.mp3', './sounds/tom-1.mp3', './sounds/tom-2.mp3', './sounds/tom-3.mp3', './sounds/tom-4.mp3']

function handleClick(e) {
    // this.style.color = "white";
    switch (e) {
        case 'w':
            sound = new Audio(audio[0])
            sound.load();
            sound.play();
            break;

        case 'a':
            sound = new Audio(audio[1])
            sound.load();
            sound.play();
            break;

        case 's':
            sound = new Audio(audio[2])
            sound.load();
            sound.play();
            break;

        case 'd':
            sound = new Audio(audio[3])
            sound.load();
            sound.play();
            break;

        case 'j':
            sound = new Audio(audio[4])
            sound.load();
            sound.play();
            break;

        case 'k':
            sound = new Audio(audio[5])
            sound.load();
            sound.play();
            break;

        case 'l':
            sound = new Audio(audio[6])
            sound.load();
            sound.play();
            break;

        default:
            console.log(this.innerHTML + "Does not exist");
            break;
    }
    // this.style.color = "#DA0463";
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)
}

// ForEach button in numberOfButtons, add an eventlistener to the current element that listens for click and fires handleClick when click is true
numberOfButtons.forEach(element => {
    element.addEventListener("click", function() {
        let clickedBtn = this.innerHTML;
        handleClick(clickedBtn);
        buttonAnimation(clickedBtn);
    })
});

document.addEventListener("keydown", function(event) {
    let keyBtn = event.key
    handleClick(keyBtn);
    buttonAnimation(keyBtn);
})