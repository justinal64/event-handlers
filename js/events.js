// Used for the EventListener for the section elements
var sectionElement = document.getElementsByTagName("section");
var outputTarget = document.getElementById("output-target");
var h1Element = document.getElementById("page-title");
var inputElement = document.getElementById("keypress-input");
var guineaPigElement = document.getElementById("guinea-pig");
var addColorButton = document.getElementById("add-color");
var hulkifyButton = document.getElementById("make-large");
var captureButton = document.getElementById("add-border");
var roundedButton = document.getElementById("add-rounding");

// Event Listener section
for(var i = 0; i < sectionElement.length; i++) {
    sectionElement[i].addEventListener("click", function() {
        var arg = "You clicked on " + this.innerHTML;
        outputTargetText(arg);
    });
}
// When user is over the h1 tag
h1Element.addEventListener("mouseover", (function() {
    outputTargetText("You moved your mouse over the header");
}));
// When user leaves the h1 tag
h1Element.addEventListener("mouseout", (function() {
    outputTargetText("You left me!!");
}));
// When user releases the key the event is triggered
inputElement.addEventListener("keyup", function() {
    outputTargetText(this.value);
});

// When user clicks text color changes color
addColorButton.addEventListener("click", function() {
    addClassName("text-blue");
});
// when user clicks the font grows
hulkifyButton.addEventListener("click", function() {
    addClassName("make-large");
});
// when user clicks element gets a border
captureButton.addEventListener("click", function() {
    addClassName("add-border");
});
// when user clicks the element get rounded borders
roundedButton.addEventListener("click", function() {
    addClassName("add-rounding");
});
// end of eventListeners

// displays text in output-target field
function outputTargetText(input) {
    outputTarget.innerHTML = input;
}

function addClassName(className) {
    // remove any existing classNames
    guineaPigElement.className = "";
    // apply the className passed by arg
    guineaPigElement.className = className;
}


