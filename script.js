// Get the DOM elements
const sideBars = document.querySelector(".side-bars"),
    navCross = document.querySelector("header #menu .menu-container-2 svg"),
    navMenu = document.querySelector("header #menu"),
    menuLinks = document.querySelectorAll("header #menu .menu-container-2 p.translation"),
    desktopDialog1 = document.getElementById("dialog-1-desktop"),
    desktopDialog2 = document.getElementById("dialog-2-desktop"),
    embeddedDialog1 = document.querySelector(".dialog-container-1"),
    embeddedDialog2 = document.querySelector(".dialog-container-2"),
    embeddedDialog1Mobile = document.querySelector(".dialog-1-mobile"),
    embeddedDialog2Mobile = document.querySelector(".dialog-2-mobile"),
    insertedDialog1Mobile = document.querySelector(".inserted-dialog-1"),
    insertedDialog2Mobile = document.querySelector(".inserted-dialog-2"),
    svg1Desktop = document.querySelector(".svg-translation-1-desktop"),
    svg2Desktop = document.querySelector(".svg-translation-2-desktop"),
    svg1Mobile = document.querySelector(".mobile-svg-1-translation"),
    svg2Mobile = document.querySelector(".mobile-svg-2-translation"),
    leftMenuContainer = document.querySelector(".menu-container-1");

let timeoutArray = [];

menuLinks.forEach(link => {
    link.style.transform = "translate(500px, 0px)";
});

sideBars.addEventListener("click", () => {
    navMenu.style.width = "100%";

    // Clear existing timeouts
    timeoutArray.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    timeoutArray = [];

    menuLinks.forEach((link, i) => {
        link.style.transition = "all 500ms";
        const delay = 260;
        const transformDelay = i * delay;

        const timeoutId = setTimeout(() => {
            link.style.transform = "translate(0px, 0px)";
        }, transformDelay);

        timeoutArray.push(timeoutId);
    });
});


const menuClose = () => {
    navMenu.style.width = "0%";

    menuLinks.forEach(link => {
        link.style.transform = "translate(500px, 0px)";
        link.style.transition = "all 500ms"; // Adjust transition duration as needed
    });

    // Clear timeouts for smoother transition
    timeoutArray.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });

    timeoutArray = [];

    // Get rid of the mobile dropdowns when the menu is closed
    hideDialog(insertedDialog1Mobile);
    hideDialog(insertedDialog2Mobile);

}

// Close the menu when the cross (X) icon is clicked
navCross.addEventListener("click", menuClose);

// Close the menu when the user clicks the left menu div (the one with the opacity)
leftMenuContainer.addEventListener("click", menuClose);

/* 

    Desktop Dialogs shown on hover +++ svg positioning
    
*/

// P.S. Tried the showModal() method, but it fluctuates so all that dialog setup was a waste, could've just used a div....

// Variable to use for alternating between functions of mobile dropdowns
var testUnit = true;

// Show the dialog
const showDialog = (dialog) => {
    dialog.style.display = "block";
    testUnit = false;
}

// Hide the dialog
const hideDialog = (dialog) => {
    dialog.style.display = "none";
    testUnit = true;
}

embeddedDialog1.addEventListener("mouseenter", () => {
    showDialog(desktopDialog1);
    // Arrow svg positioning
    svg1Desktop.style.transform = "rotate(180deg)";
});

embeddedDialog1.addEventListener("mouseleave", () => {
    hideDialog(desktopDialog1);
    // Arrow svg positioning
    svg1Desktop.style.transform = "rotate(360deg)";
});

embeddedDialog2.addEventListener("mouseenter", () => {
    showDialog(desktopDialog2);
    // Arrow svg positioning
    svg2Desktop.style.transform = "rotate(180deg)";
});

embeddedDialog2.addEventListener("mouseleave", () => {
    hideDialog(desktopDialog2)
    // Arrow svg positioning
    svg2Desktop.style.transform = "rotate(360deg)";
});

/* 

    Mobile Dialogs shown on Click

*/

embeddedDialog1Mobile.addEventListener("click", () => {
    if (testUnit) {
        showDialog(insertedDialog1Mobile);
        // Arrow svg positioning
        svg1Mobile.style.transform = "rotate(180deg)";
    } else {
        hideDialog(insertedDialog1Mobile);
        // Arrow svg positioning
        svg1Mobile.style.transform = "rotate(360deg)";
    }
});

embeddedDialog2Mobile.addEventListener("click", () => {
    if (testUnit) {
        showDialog(insertedDialog2Mobile);
        // Arrow svg positioning
        svg2Mobile.style.transform = "rotate(180deg)";
    } else {
        hideDialog(insertedDialog2Mobile);
        // Arrow svg positioning
        svg2Mobile.style.transform = "rotate(360deg)";
    }
});