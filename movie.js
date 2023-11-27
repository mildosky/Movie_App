document.getElementById("menu-toggle").addEventListener("click", function () {
    var sideMenu = document.getElementById("side-menu");
    var mainContent = document.getElementById("main-content");

    if (sideMenu.style.left === "-250px") {
        sideMenu.style.left = "0";
        mainContent.style.marginLeft = "250px";
    } else {
        sideMenu.style.left = "-250px";
        mainContent.style.marginLeft = "0";
    }
});
