function generalUnleash() {
    document.getElementsByTagName("p")[2].classList.toggle("huge");
    document.getElementsByTagName("p")[2].classList.toggle("hidden");

    var generalCheckbox = document.getElementById("killGeneral");

    if (generalCheckbox.checked === true) {
        document.getElementsByTagName('p')[2].textContent = "The general is dead";
    }
}