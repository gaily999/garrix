// ==========================================================
//                  SCIENTIFIC CALCULATOR
// ==========================================================

const display = document.getElementById("display");

// ----------------------------------------------------------
// Add values to the display
// ----------------------------------------------------------

function appendValue(value) {

    if (!display) return;

    display.value += value;

}

// ----------------------------------------------------------
// Clear display
// ----------------------------------------------------------

function clearDisplay() {

    if (!display) return;

    display.value = "";

}

// ----------------------------------------------------------
// Delete last character
// ----------------------------------------------------------

function deleteLast() {

    if (!display) return;

    display.value = display.value.slice(0, -1);

}

// ----------------------------------------------------------
// Calculate expression
// ----------------------------------------------------------

function calculate() {

    if (!display) return;

    try {

        let expression = display.value;

        // Convert percentages
        expression = expression.replace(
            /(\d+)%/g,
            "($1/100)"
        );

        display.value = eval(expression);

    }

    catch {

        display.value = "Error";

    }

}

// ==========================================================
//                  SPECIAL FUNCTIONS
// ==========================================================

// ----------------------------------------------------------
// Square
// ----------------------------------------------------------

function squareNumber() {

    if (!display) return;

    try {

        const number = eval(display.value);

        display.value = number * number;

    }

    catch {

        display.value = "Error";

    }

}

// ----------------------------------------------------------
// Square Root
// ----------------------------------------------------------

function squareRoot() {

    if (!display) return;

    try {

        const number = eval(display.value);

        display.value = Math.sqrt(number);

    }

    catch {

        display.value = "Error";

    }

}

// ----------------------------------------------------------
// Percentage
// ----------------------------------------------------------

function percentage() {

    if (!display) return;

    try {

        const number = eval(display.value);

        display.value = number / 100;

    }

    catch {

        display.value = "Error";

    }

}

// ----------------------------------------------------------
// Trigonometric Functions
// ----------------------------------------------------------

function calculateTrig(type) {

    if (!display) return;

    try {

        const value = eval(display.value);

        const radians = value * Math.PI / 180;

        if (type === "sin") {

            display.value = Math.sin(radians);

        }

        else if (type === "cos") {

            display.value = Math.cos(radians);

        }

        else if (type === "tan") {

            display.value = Math.tan(radians);

        }

    }

    catch {

        display.value = "Error";

    }

}

// ----------------------------------------------------------
// Logarithm
// ----------------------------------------------------------

function logarithm() {

    if (!display) return;

    try {

        const number = eval(display.value);

        display.value = Math.log10(number);

    }

    catch {

        display.value = "Error";

    }

}

// ----------------------------------------------------------
// Insert

// ==========================================================
//                  DIAMETER CALCULATOR
// ==========================================================

// Show Selected Calculator

function showShape(shape){

    const boxes = document.querySelectorAll(".shape-box");

    boxes.forEach(box => {

        box.style.display = "none";

    });

    const selected = document.getElementById(shape);

    if(selected){

        selected.style.display = "block";

        selected.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    }

}

// ----------------------------------------------------------
// Diameter from Radius
// ----------------------------------------------------------

function calculateDiameter(){

    const radius =
        parseFloat(document.getElementById("radiusInput").value);

    const result =
        document.getElementById("diameterResult");

    if(isNaN(radius)){

        result.innerHTML = "Enter a valid radius.";

        return;

    }

    result.innerHTML =
        "Diameter = <b>" + (radius * 2) + "</b>";

}

// ----------------------------------------------------------
// Radius from Diameter
// ----------------------------------------------------------

function calculateRadius(){

    const diameter =
        parseFloat(document.getElementById("diameterInput").value);

    const result =
        document.getElementById("radiusResult");

    if(isNaN(diameter)){

        result.innerHTML = "Enter a valid diameter.";

        return;

    }

    result.innerHTML =
        "Radius = <b>" + (diameter / 2) + "</b>";

}

// ----------------------------------------------------------
// Circumference from Radius
// ----------------------------------------------------------

function calculateCircumference(){

    const radius =
        parseFloat(document.getElementById("circRadius").value);

    const result =
        document.getElementById("circumferenceResult");

    if(isNaN(radius)){

        result.innerHTML = "Enter a valid radius.";

        return;

    }

    result.innerHTML =
        "Circumference = <b>" +
        (2 * Math.PI * radius).toFixed(2) +
        "</b>";

}

// ==========================================================
//                  AREA CALCULATOR
// ==========================================================

// Rectangle

function rectangleArea(){

    const length =
        parseFloat(document.getElementById("rectLength").value);

    const width =
        parseFloat(document.getElementById("rectWidth").value);

    const result =
        document.getElementById("rectangleResult");

    if(isNaN(length) || isNaN(width)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Area = <b>" + (length * width) + "</b>";

}

// Square

function squareArea(){

    const side =
        parseFloat(document.getElementById("squareSide").value);

    const result =
        document.getElementById("squareResult");

    if(isNaN(side)){

        result.innerHTML = "Enter a valid number.";

        return;

    }

    result.innerHTML =
        "Area = <b>" + (side * side) + "</b>";

}

// Triangle

function triangleArea(){

    const base =
        parseFloat(document.getElementById("triangleBase").value);

    const height =
        parseFloat(document.getElementById("triangleHeight").value);

    const result =
        document.getElementById("triangleResult");

    if(isNaN(base) || isNaN(height)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Area = <b>" +
        ((base * height) / 2) +
        "</b>";

}

// Circle

function circleArea(){

    const radius =
        parseFloat(document.getElementById("circleRadius").value);

    const result =
        document.getElementById("circleResult");

    if(isNaN(radius)){

        result.innerHTML = "Enter a valid radius.";

        return;

    }

    result.innerHTML =
        "Area = <b>" +
        (Math.PI * radius * radius).toFixed(2) +
        "</b>";

}

// Parallelogram

function parallelogramArea(){

    const base =
        parseFloat(document.getElementById("paraBase").value);

    const height =
        parseFloat(document.getElementById("paraHeight").value);

    const result =
        document.getElementById("parallelogramResult");

    if(isNaN(base) || isNaN(height)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Area = <b>" + (base * height) + "</b>";

}

// Trapezoid

function trapezoidArea(){

    const a =
        parseFloat(document.getElementById("trapBase1").value);

    const b =
        parseFloat(document.getElementById("trapBase2").value);

    const height =
        parseFloat(document.getElementById("trapHeight").value);

    const result =
        document.getElementById("trapezoidResult");

    if(isNaN(a) || isNaN(b) || isNaN(height)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Area = <b>" +
        (((a + b) * height) / 2) +
        "</b>";

}
// ==========================================================
//                  PERIMETER CALCULATOR
// ==========================================================

// Rectangle

function rectanglePerimeter(){

    const length =
        parseFloat(document.getElementById("perimeterLength").value);

    const width =
        parseFloat(document.getElementById("perimeterWidth").value);

    const result =
        document.getElementById("rectanglePerimeterResult");

    if(isNaN(length) || isNaN(width)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Perimeter = <b>" +
        (2 * (length + width)) +
        "</b>";

}

// Square

function squarePerimeter(){

    const side =
        parseFloat(document.getElementById("perimeterSide").value);

    const result =
        document.getElementById("squarePerimeterResult");

    if(isNaN(side)){

        result.innerHTML = "Enter a valid number.";

        return;

    }

    result.innerHTML =
        "Perimeter = <b>" +
        (4 * side) +
        "</b>";

}

// Triangle

function trianglePerimeter(){

    const a =
        parseFloat(document.getElementById("triangleSideA").value);

    const b =
        parseFloat(document.getElementById("triangleSideB").value);

    const c =
        parseFloat(document.getElementById("triangleSideC").value);

    const result =
        document.getElementById("trianglePerimeterResult");

    if(isNaN(a) || isNaN(b) || isNaN(c)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Perimeter = <b>" +
        (a + b + c) +
        "</b>";

}

// Circle (Circumference)

function circlePerimeter(){

    const radius =
        parseFloat(document.getElementById("circlePerimeterRadius").value);

    const result =
        document.getElementById("circlePerimeterResult");

    if(isNaN(radius)){

        result.innerHTML = "Enter a valid radius.";

        return;

    }

    result.innerHTML =
        "Circumference = <b>" +
        (2 * Math.PI * radius).toFixed(2) +
        "</b>";

}

// Parallelogram

function parallelogramPerimeter(){

    const base =
        parseFloat(document.getElementById("paraPerimeterBase").value);

    const side =
        parseFloat(document.getElementById("paraPerimeterSide").value);

    const result =
        document.getElementById("parallelogramPerimeterResult");

    if(isNaN(base) || isNaN(side)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Perimeter = <b>" +
        (2 * (base + side)) +
        "</b>";

}

// ==========================================================
//                  VOLUME CALCULATOR
// ==========================================================

// Cube

function cubeVolume(){

    const side =
        parseFloat(document.getElementById("cubeSide").value);

    const result =
        document.getElementById("cubeResult");

    if(isNaN(side)){

        result.innerHTML = "Enter a valid number.";

        return;

    }

    result.innerHTML =
        "Volume = <b>" +
        Math.pow(side,3) +
        "</b>";

}

// Rectangular Prism

function rectangularPrismVolume(){

    const length =
        parseFloat(document.getElementById("prismLength").value);

    const width =
        parseFloat(document.getElementById("prismWidth").value);

    const height =
        parseFloat(document.getElementById("prismHeight").value);

    const result =
        document.getElementById("prismResult");

    if(isNaN(length) || isNaN(width) || isNaN(height)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Volume = <b>" +
        (length * width * height) +
        "</b>";

}

// Cylinder

function cylinderVolume(){

    const radius =
        parseFloat(document.getElementById("cylinderRadius").value);

    const height =
        parseFloat(document.getElementById("cylinderHeight").value);

    const result =
        document.getElementById("cylinderResult");

    if(isNaN(radius) || isNaN(height)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Volume = <b>" +
        (Math.PI * radius * radius * height).toFixed(2) +
        "</b>";

}

// Cone

function coneVolume(){

    const radius =
        parseFloat(document.getElementById("coneRadius").value);

    const height =
        parseFloat(document.getElementById("coneHeight").value);

    const result =
        document.getElementById("coneResult");

    if(isNaN(radius) || isNaN(height)){

        result.innerHTML = "Enter valid numbers.";

        return;

    }

    result.innerHTML =
        "Volume = <b>" +
        ((Math.PI * radius * radius * height) / 3).toFixed(2) +
        "</b>";

}

// Sphere

function sphereVolume(){

    const radius =
        parseFloat(document.getElementById("sphereRadius").value);

    const result =
        document.getElementById("sphereResult");

    if(isNaN(radius)){

        result.innerHTML = "Enter a valid radius.";

        return;

    }

    result.innerHTML =
        "Volume = <b>" +
        ((4/3) * Math.PI * Math.pow(radius,3)).toFixed(2) +
        "</b>";

}
// ==========================================================
//                  PAGE INITIALIZATION
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    // Hide all shape calculators

    document.querySelectorAll(".shape-box").forEach(box => {

        box.style.display = "none";

    });

    // Automatically highlight the current page

    const currentPage =
        window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const page =
            link.getAttribute("href")?.split("/").pop();

        if (page === currentPage) {

            link.classList.add("active");

        }

    });

});

// ==========================================================
//                  KEYBOARD SUPPORT
// ==========================================================

document.addEventListener("keydown", function (event) {

    if (!display) return;

    // Numbers and operators

    if ("0123456789+-*/().".includes(event.key)) {

        appendValue(event.key);

    }

    // Percentage

    else if (event.key === "%") {

        appendValue("%");

    }

    // Enter

    else if (event.key === "Enter") {

        event.preventDefault();

        calculate();

    }

    // Backspace

    else if (event.key === "Backspace") {

        event.preventDefault();

        deleteLast();

    }

    // Escape

    else if (event.key === "Escape") {

        clearDisplay();

    }

});

// ==========================================================
//                  BUTTON PRESS EFFECT
// ==========================================================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function () {

        button.style.transform = "scale(.96)";

        setTimeout(function () {

            button.style.transform = "";

        }, 100);

    });

});

// ==========================================================
//                  SMOOTH SCROLL TO TOP
// ==========================================================

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ==========================================================
//                  CURRENT YEAR (OPTIONAL)
// ==========================================================

const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });

}

// ==========================================================
//                  BACK TO TOP BUTTON
// ==========================================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    // Show button after scrolling
    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    // Scroll to top when clicked
    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
const footer = document.querySelector("footer");

if (backToTop && footer) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

        const footerTop = footer.getBoundingClientRect().top;

        if (footerTop < window.innerHeight) {
            backToTop.classList.add("hide");
        } else {
            backToTop.classList.remove("hide");
        }

    });

}
