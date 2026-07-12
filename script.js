// ==========================================================
//                  SCIENTIFIC CALCULATOR
// ==========================================================
const display = document.getElementById("display");

function appendValue(value) {
    if (!display) return;
    display.value += value;
}

function clearDisplay() {
    if (!display) return;
    display.value = "";
}

function deleteLast() {
    if (!display) return;
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (!display) return;
    try {
        const originalExpression = display.value;
        let expression = originalExpression;
        expression = expression.replace(/(\d+)%/g, "($1/100)");
        const answer = eval(expression);
        display.value = answer;
        saveHistory(originalExpression, answer);
    } catch {
        display.value = "Error";
        showToast("Invalid calculation.", "error");
    }
}

// ==========================================================
//                 TOAST NOTIFICATIONS
// ==========================================================
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// ==========================================================
//                  SPECIAL FUNCTIONS
// ==========================================================
function squareNumber() {
    if (!display) return;
    try {
        const number = eval(display.value);
        const answer = number * number;
        display.value = answer;
        saveHistory(`${number}²`, answer);
    } catch {
        display.value = "Error";
        showToast("Invalid calculation.", "error");
    }
}

function squareRoot() {
    if (!display) return;
    try {
        const number = eval(display.value);
        const answer = Math.sqrt(number);
        display.value = answer;
        saveHistory(`√(${number})`, answer);
    } catch {
        display.value = "Error";
        showToast("Invalid calculation.", "error");
    }
}

// ==========================================================
//                  DIAMETER CALCULATOR
// ==========================================================
function showShape(shape) {
    const boxes = document.querySelectorAll(".shape-box");
    boxes.forEach(box => {
        box.style.display = "none";
    });
    const selected = document.getElementById(shape);
    if (selected) {
        selected.style.display = "block";
        selected.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function calculateDiameter() {
    const radius = parseFloat(document.getElementById("radiusInput").value);
    const result = document.getElementById("diameterResult");
    if (isNaN(radius)) {
        result.innerHTML = "Enter a valid radius.";
        return;
    }
    result.innerHTML = "Diameter = <b>" + (radius * 2) + "</b>";
}

function calculateRadius() {
    const diameter = parseFloat(document.getElementById("diameterInput").value);
    const result = document.getElementById("radiusResult");
    if (isNaN(diameter)) {
        result.innerHTML = "Enter a valid diameter.";
        return;
    }
    result.innerHTML = "Radius = <b>" + (diameter / 2) + "</b>";
}

function calculateCircumference() {
    const radius = parseFloat(document.getElementById("circRadius").value);
    const result = document.getElementById("circumferenceResult");
    if (isNaN(radius)) {
        result.innerHTML = "Enter a valid radius.";
        return;
    }
    result.innerHTML = "Circumference = <b>" + (2 * Math.PI * radius).toFixed(2) + "</b>";
}

// ==========================================================
//                  AREA CALCULATOR
// ==========================================================
function rectangleArea() {
    const length = parseFloat(document.getElementById("rectLength").value);
    const width = parseFloat(document.getElementById("rectWidth").value);
    const result = document.getElementById("rectangleResult");
    if (isNaN(length) || isNaN(width)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Area = <b>" + (length * width) + "</b>";
}

function squareArea() {
    const side = parseFloat(document.getElementById("squareSide").value);
    const result = document.getElementById("squareResult");
    if (isNaN(side)) {
        result.innerHTML = "Enter a valid number.";
        return;
    }
    result.innerHTML = "Area = <b>" + (side * side) + "</b>";
}

function triangleArea() {
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);
    const result = document.getElementById("triangleResult");
    if (isNaN(base) || isNaN(height)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Area = <b>" + ((base * height) / 2) + "</b>";
}

function circleArea() {
    const radius = parseFloat(document.getElementById("circleRadius").value);
    const result = document.getElementById("circleResult");
    if (isNaN(radius)) {
        result.innerHTML = "Enter a valid radius.";
        return;
    }
    result.innerHTML = "Area = <b>" + (Math.PI * radius * radius).toFixed(2) + "</b>";
}

function parallelogramArea() {
    const base = parseFloat(document.getElementById("paraBase").value);
    const height = parseFloat(document.getElementById("paraHeight").value);
    const result = document.getElementById("parallelogramResult");
    if (isNaN(base) || isNaN(height)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Area = <b>" + (base * height) + "</b>";
}

function trapezoidArea() {
    const a = parseFloat(document.getElementById("trapBase1").value);
    const b = parseFloat(document.getElementById("trapBase2").value);
    const height = parseFloat(document.getElementById("trapHeight").value);
    const result = document.getElementById("trapezoidResult");
    if (isNaN(a) || isNaN(b) || isNaN(height)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Area = <b>" + (((a + b) * height) / 2) + "</b>";
}

// ==========================================================
//                  PERIMETER CALCULATOR
// ==========================================================
function rectanglePerimeter() {
    const length = parseFloat(document.getElementById("perimeterLength").value);
    const width = parseFloat(document.getElementById("perimeterWidth").value);
    const result = document.getElementById("rectanglePerimeterResult");
    if (isNaN(length) || isNaN(width)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Perimeter = <b>" + (2 * (length + width)) + "</b>";
}

/* Remaining functions match exactly */
function squarePerimeter() {
    const side = parseFloat(document.getElementById("perimeterSide").value);
    const result = document.getElementById("squarePerimeterResult");
    if (isNaN(side)) {
        result.innerHTML = "Enter a valid number.";
        return;
    }
    result.innerHTML = "Perimeter = <b>" + (4 * side) + "</b>";
}

function trianglePerimeter() {
    const a = parseFloat(document.getElementById("triangleSideA").value);
    const b = parseFloat(document.getElementById("triangleSideB").value);
    const c = parseFloat(document.getElementById("triangleSideC").value);
    const result = document.getElementById("trianglePerimeterResult");
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Perimeter = <b>" + (a + b + c) + "</b>";
}

function circlePerimeter() {
    const radius = parseFloat(document.getElementById("circlePerimeterRadius").value);
    const result = document.getElementById("circlePerimeterResult");
    if (isNaN(radius)) {
        result.innerHTML = "Enter a valid radius.";
        return;
    }
    result.innerHTML = "Circumference = <b>" + (2 * Math.PI * radius).toFixed(2) + "</b>";
}

function parallelogramPerimeter() {
    const base = parseFloat(document.getElementById("paraPerimeterBase").value);
    const side = parseFloat(document.getElementById("paraPerimeterSide").value);
    const result = document.getElementById("parallelogramPerimeterResult");
    if (isNaN(base) || isNaN(side)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Perimeter = <b>" + (2 * (base + side)) + "</b>";
}

// ==========================================================
//                  VOLUME CALCULATOR
// ==========================================================
function cubeVolume() {
    const side = parseFloat(document.getElementById("cubeSide").value);
    const result = document.getElementById("cubeResult");
    if (isNaN(side)) {
        result.innerHTML = "Enter a valid number.";
        return;
    }
    result.innerHTML = "Volume = <b>" + Math.pow(side, 3) + "</b>";
}

function rectangularPrismVolume() {
    const length = parseFloat(document.getElementById("prismLength").value);
    const width = parseFloat(document.getElementById("prismWidth").value);
    const height = parseFloat(document.getElementById("prismHeight").value);
    const result = document.getElementById("prismResult");
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Volume = <b>" + (length * width * height) + "</b>";
}

function cylinderVolume() {
    const radius = parseFloat(document.getElementById("cylinderRadius").value);
    const height = parseFloat(document.getElementById("cylinderHeight").value);
    const result = document.getElementById("cylinderResult");
    if (isNaN(radius) || isNaN(height)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Volume = <b>" + (Math.PI * radius * radius * height).toFixed(2) + "</b>";
}

function coneVolume() {
    const radius = parseFloat(document.getElementById("coneRadius").value);
    const height = parseFloat(document.getElementById("coneHeight").value);
    const result = document.getElementById("coneResult");
    if (isNaN(radius) || isNaN(height)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    result.innerHTML = "Volume = <b>" + ((Math.PI * radius * radius * height) / 3).toFixed(2) + "</b>";
}

function sphereVolume() {
    const radius = parseFloat(document.getElementById("sphereRadius").value);
    const result = document.getElementById("sphereResult");
    if (isNaN(radius)) {
        result.innerHTML = "Enter a valid radius.";
        return;
    }
    result.innerHTML = "Volume = <b>" + ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2) + "</b>";
}

// ==========================================================
//                  PAGE INITIALIZATION
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".shape-box").forEach(box => {
        box.style.display = "none";
    });

    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        const page = link.getAttribute("href")?.split("/").pop();
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

    if ("0123456789+-*/().".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "%") {
        appendValue("%");
    } else if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (event.key === "Backspace") {
        event.preventDefault();
        deleteLast();
    } else if (event.key === "Escape") {
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
//                  GLOBAL FEATURES (THEME & TOP BTN)
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

const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================================================
//                  CALCULATION HISTORY
// ==========================================================
let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

function saveHistory(expression, answer) {
    history.unshift({ expression, answer });
    if (history.length > 15) {
        history.pop();
    }
    localStorage.setItem("calcHistory", JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById("historyList");
    if (!list) return;
    if (history.length === 0) {
        list.innerHTML = '<p class="empty-history">No calculations yet.</p>';
        return;
    }
    list.innerHTML = "";
    history.forEach(item => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = `<strong>${item.expression}</strong><br>= ${item.answer}`;
        list.appendChild(div);
    });
}

function clearHistory() {
    history = [];
    localStorage.removeItem("calcHistory");
    renderHistory();
}
document.addEventListener("DOMContentLoaded", renderHistory);

// ==========================================================
//                  COPY ANSWER
// ==========================================================
function copyAnswer() {
    if (!display || display.value === "") return;
    navigator.clipboard.writeText(display.value);
    const btn = document.getElementById("copyBtn");
    if (btn) {
        btn.textContent = "Copied!";
        setTimeout(function () {
            btn.textContent = "Copy";
        }, 1500);
    }
}

// ==========================================================
// FORMULA SEARCH
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("formulaSearch");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            let searchValue = this.value.toLowerCase();
            let cards = document.querySelectorAll(".formula-card");
            cards.forEach(card => {
                let text = card.innerText.toLowerCase();
                if (text.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});

// ==========================================================
//                    UNIT CONVERTER
// ==========================================================
const unitData = {
    length: { Meter: 1, Kilometer: 1000, Centimeter: 0.01, Millimeter: 0.001, Mile: 1609.34, Foot: 0.3048, Inch: 0.0254 },
    weight: { Kilogram: 1, Gram: 0.001, Pound: 0.453592, Ounce: 0.0283495 },
    time: { Second: 1, Minute: 60, Hour: 3600, Day: 86400 },
    area: { "Square Meter": 1, "Square Kilometer": 1000000, "Square Centimeter": 0.0001, "Square Foot": 0.092903 },
    volume: { "Liter": 1, "Milliliter": 0.001, "Cubic Meter": 1000, "Gallon": 3.78541 },
    temperature: { Celsius: 1, Fahrenheit: 1, Kelvin: 1 }
};

function changeUnits() {
    const type = document.getElementById("conversionType");
    if (!type) return;
    const selected = type.value;
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");
    if (!from || !to) return;

    from.innerHTML = "";
    to.innerHTML = "";

    Object.keys(unitData[selected]).forEach(unit => {
        from.innerHTML += `<option value="${unit}">${unit}</option>`;
        to.innerHTML += `<option value="${unit}">${unit}</option>`;
    });
}

window.addEventListener("load", () => {
    if (document.getElementById("conversionType")) {
        changeUnits();
    }
});

function convertUnit() {
    const type = document.getElementById("conversionType").value;
    const value = Number(document.getElementById("convertValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    if (!value && value !== 0) {
        showToast("Please enter a value first.", "error");
        return;
    }

    let result;
    if (type === "temperature") {
        result = temperatureConvert(value, from, to);
    } else {
        let base = value * unitData[type][from];
        result = base / unitData[type][to];
    }

    result = Number(result.toFixed(6));
    document.getElementById("conversionResult").innerHTML = `${value} ${from} = ${result} ${to}`;
    showToast("Conversion completed!");
    saveConversion(`${value} ${from} → ${result} ${to}`);
}

function temperatureConvert(value, from, to) {
    let celsius;
    if (from === "Celsius") {
        celsius = value;
    } else if (from === "Fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    if (to === "Celsius") {
        return celsius;
    } else if (to === "Fahrenheit") {
        return (celsius * 9 / 5) + 32;
    } else {
        return celsius + 273.15;
    }
}

function swapUnits() {
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");
    if (!from || !to) return;

    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    showToast("Units swapped!");
}

// ==========================================================
//                 CONVERSION HISTORY
// ==========================================================
function saveConversion(text) {
    const historyElement = document.getElementById("conversionHistory");
    if (!historyElement) return;

    const empty = historyElement.querySelector(".empty-history");
    if (empty) {
        empty.remove();
    }

    const item = document.createElement("div");
    item.className = "history-item";
    item.textContent = text;
    historyElement.prepend(item);
}

function clearConversionHistory() {
    const historyElement = document.getElementById("conversionHistory");
    if (historyElement) {
        historyElement.innerHTML = `<p class="empty-history">No conversions yet.</p>`;
    }
}

// ==========================================================
//                 CURRENCY CONVERTER
// ==========================================================
const currencyRates = {
    USD: { PHP: 58, EUR: 0.92, JPY: 157, GBP: 0.79 },
    PHP: { USD: 0.017, EUR: 0.016, JPY: 2.7, GBP: 0.014 },
    EUR: { USD: 1.09, PHP: 63, JPY: 171, GBP: 0.86 },
    JPY: { USD: 0.0064, PHP: 0.37, EUR: 0.0058, GBP: 0.005 },
    GBP: { USD: 1.27, PHP: 74, EUR: 1.17, JPY: 200 }
};

function convertCurrency() {
    const amount = Number(document.getElementById("currencyAmount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    if (!amount && amount !== 0) {
        alert("Enter amount first.");
        return;
    }

    let result;
    if (from === to) {
        result = amount;
    } else {
        result = amount * currencyRates[from][to];
    }

    result = Number(result.toFixed(2));
    document.getElementById("currencyResult").innerHTML = `${amount} ${from} = ${result} ${to}`;
    saveCurrencyHistory(`${amount} ${from} → ${result} ${to}`);
    showToast("Currency converted!");
}

function swapCurrency() {
    const from = document.getElementById("fromCurrency");
    const to = document.getElementById("toCurrency");
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    showToast("Currencies swapped!");
}

function saveCurrencyHistory(text) {
    let currencyHistoryList = JSON.parse(localStorage.getItem("currencyHistory")) || [];
    currencyHistoryList.unshift(text);
    if (currencyHistoryList.length > 10) {
        currencyHistoryList.pop();
    }
    localStorage.setItem("currencyHistory", JSON.stringify(currencyHistoryList));
    displayCurrencyHistory();
}

function displayCurrencyHistory() {
    const historyBox = document.getElementById("currencyHistory");
    if (!historyBox) return;

    let currencyHistoryList = JSON.parse(localStorage.getItem("currencyHistory")) || [];
    if (currencyHistoryList.length === 0) {
        historyBox.innerHTML = `<p class="empty-history">No currency conversions yet.</p>`;
        return;
    }

    historyBox.innerHTML = "";
    currencyHistoryList.forEach(item => {
        let div = document.createElement("div");
        div.className = "history-item";
        div.textContent = item;
        historyBox.appendChild(div);
    });
}

function clearCurrencyHistory() {
    localStorage.removeItem("currencyHistory");
    displayCurrencyHistory();
}

// ==========================================================
// MOBILE MENU & RESPONSIVE NAV DROPDOWNS
// ==========================================================
const menuToggleElement = document.getElementById("menu-toggle");
const navLinksElement = document.querySelector(".nav-links");

if (menuToggleElement && navLinksElement) {
    menuToggleElement.addEventListener("click", () => {
        navLinksElement.classList.toggle("active");
    });
}

const dropdownElements = document.querySelectorAll(".dropdown");
dropdownElements.forEach(dropdown => {
    const link = dropdown.querySelector(":scope > a");
    if (link) {
        link.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownElements.forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove("open");
                    }
                });
                dropdown.classList.toggle("open");
            }
        });
    }
});