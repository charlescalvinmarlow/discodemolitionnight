window.onload = function () {
    //console.log("OK");
    //find menu items
    var menu = document.getElementById("menuBtn");
    var navigation = document.getElementById("navBlock");

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


    //code to make mouse wheels and trackpad vertical scrolling translate into horizontal scrolling instead
    //from https://www.reddit.com/r/webdev/comments/zqr9ss/hi_all_im_trying_to_do_horizontal_scrolling_in/
    var horizontal = document.getElementById("horizontalScroll");
    horizontal.addEventListener("wheel", (e) => {
        e.preventDefault();
        horizontal.scrollLeft += e.deltaY;
    });

}; //close onload
