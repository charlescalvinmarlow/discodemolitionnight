window.onload = function () {
    //console.log("OK");
    //find menu items
    var menu = document.getElementById("menuBtn");
    var navigation = document.getElementById("navBlock");
    var cover = document.getElementById("screencover");
    var closeBtn = document.getElementById("expBtn");
    const hasVisited = sessionStorage.getItem('hasVisited');

    menu.onclick = function () {
        if (menu.classList.contains("menuIcon")) {
            menu.classList.remove("menuIcon");
            menu.classList.add("closeIcon");
            navigation.style.display = "flex";
        } else {
            menu.classList.remove("closeIcon");
            menu.classList.add("menuIcon");
            navigation.style.display = "none";
        }
    }

    //    code for hiding introduction splash screen
    closeBtn.onclick = function () {
        cover.style.display = "none";
        console.log("asdas");
    };

    //hide intro splash screen after it has been seen once
    //from https://stackoverflow.com/questions/63101799/display-an-element-on-first-page-visit

    if (!hasVisited) {
        sessionStorage.setItem('hasVisited', true);
    } else {
        cover.style.display = "none";
    }


    //code to fix nav still appearing when opened and window is shrunk
    //on window resize if the closeIcon class is on the menu, then remove it and hide the nav
    window.onresize = function () {
        if (menu.classList.contains("menuIcon")) {

        } else {
            menu.classList.remove("closeIcon");
            menu.classList.add("menuIcon");
            navigation.style.display = "none";
        }
    };

}; //close onload
