window.onload = function () {
    console.log("OK");
    //find menu items
    var menu = document.getElementById("menuBtn")
    var navigation = document.getElementById("navBlock")
    var mediaQuery = window.matchMedia("(max-width: 700px)")

    menu.onclick = function () {
        if (menu.classList.contains("menuIcon")) {
            menu.classList.remove("menuIcon");
            menu.classList.add("closeIcon");
            navigation.style.display = "block";
            console.log("close?")
        } else {
            menu.classList.remove("closeIcon");
            menu.classList.add("menuIcon");
            navigation.style.display = "none";
        }
    }

    //    if (menu.classList.contains("closeIcon") && mediaQuery == false) {
    //        navigation.style.display = "none"
    //    }
} //close onload

//code to identify when window is resized from https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

//code to fix nav still appearing when opened and window is shrunk
