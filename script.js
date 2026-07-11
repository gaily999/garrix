// ==========================================================
//                  SCIENTIFIC CALCULATOR
// ==========================================================


const display = document.getElementById("display");


// Add values from buttons

function appendValue(value) {

    if (!display) return;

    display.value += value;

}



// Clear calculator

function clearDisplay() {

    if (!display) return;

    display.value = "";

}



// Delete last character

function deleteLast() {

    if (!display) return;

    display.value =
        display.value.slice(0, -1);

}



// Calculate expression

function calculate() {

    if (!display) return;


    try {

        let expression = display.value;


        // Replace percentage

        expression =
            expression.replace(
                /(\d+)%/g,
                "($1/100)"
            );


        display.value =
            eval(expression);


    } catch {

        display.value = "Error";

    }

}





// ==========================================================
//                  SPECIAL FUNCTIONS
// ==========================================================



// Square

function squareNumber() {

    if (!display) return;


    try {

        let number =
            eval(display.value);


        display.value =
            number * number;


    } catch {

        display.value = "Error";

    }

}





// Square Root

function squareRoot() {

    if (!display) return;


    try {

        let number =
            eval(display.value);


        display.value =
            Math.sqrt(number);


    } catch {

        display.value = "Error";

    }

}





// Percentage

function percentage() {

    if (!display) return;


    try {

        let number =
            eval(display.value);


        display.value =
            number / 100;


    } catch {

        display.value = "Error";

    }

}





// Trigonometry

function calculateTrig(type) {


    if (!display) return;


    try {


        let value =
            eval(display.value);



        // Convert degrees to radians

        let radians =
            value * Math.PI / 180;



        if(type === "sin"){

            display.value =
                Math.sin(radians);

        }


        else if(type === "cos"){

            display.value =
                Math.cos(radians);

        }


        else if(type === "tan"){

            display.value =
                Math.tan(radians);

        }



    } catch {

        display.value = "Error";

    }

}





// Logarithm

function logarithm(){

    if(!display) return;


    try{


        let number =
            eval(display.value);


        display.value =
            Math.log10(number);


    }

    catch{

        display.value="Error";

    }

}





// Pi

function insertPi(){

    if(!display) return;


    display.value += Math.PI;

}





// ==========================================================
//                  SHAPE SELECTOR
// ==========================================================


function showShape(shape){


    document
    .querySelectorAll(".shape-box")
    .forEach(box=>{


        box.style.display = "none";


    });



    const selected =
        document.getElementById(shape);



    if(selected){


        selected.style.display =
            "block";


    }


}
// ==========================================================
//                      AREA CALCULATOR
// ==========================================================



// Rectangle Area
function rectangleArea(){

    const length =
        parseFloat(
            document.getElementById("rectLength").value
        );


    const width =
        parseFloat(
            document.getElementById("rectWidth").value
        );



    const result =
        document.getElementById("rectangleResult");



    if(isNaN(length) || isNaN(width)){

        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Area = <b>" +
        (length * width) +
        "</b>";

}





// Square Area

function squareArea(){


    const side =
        parseFloat(
            document.getElementById("squareSide").value
        );


    const result =
        document.getElementById("squareResult");



    if(isNaN(side)){


        result.innerHTML =
            "Enter a valid number.";

        return;

    }



    result.innerHTML =
        "Area = <b>" +
        (side * side) +
        "</b>";

}





// Triangle Area

function triangleArea(){


    const base =
        parseFloat(
            document.getElementById("triangleBase").value
        );


    const height =
        parseFloat(
            document.getElementById("triangleHeight").value
        );



    const result =
        document.getElementById("triangleResult");



    if(isNaN(base) || isNaN(height)){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Area = <b>" +
        ((base * height) / 2) +
        "</b>";

}





// Circle Area

function circleArea(){


    const radius =
        parseFloat(
            document.getElementById("circleRadius").value
        );



    const result =
        document.getElementById("circleResult");



    if(isNaN(radius)){


        result.innerHTML =
            "Enter a valid radius.";

        return;

    }



    result.innerHTML =
        "Area = <b>" +
        (Math.PI * radius * radius)
        .toFixed(2)
        +
        "</b>";

}





// Parallelogram Area

function parallelogramArea(){


    const base =
        parseFloat(
            document.getElementById("paraBase").value
        );


    const height =
        parseFloat(
            document.getElementById("paraHeight").value
        );



    const result =
        document.getElementById("parallelogramResult");



    if(isNaN(base) || isNaN(height)){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Area = <b>" +
        (base * height) +
        "</b>";

}





// Trapezoid Area

function trapezoidArea(){


    const a =
        parseFloat(
            document.getElementById("trapBase1").value
        );


    const b =
        parseFloat(
            document.getElementById("trapBase2").value
        );


    const height =
        parseFloat(
            document.getElementById("trapHeight").value
        );



    const result =
        document.getElementById("trapezoidResult");



    if(
        isNaN(a) ||
        isNaN(b) ||
        isNaN(height)
    ){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Area = <b>" +
        (((a + b) * height) / 2)
        +
        "</b>";

}
// ==========================================================
//                  PERIMETER CALCULATOR
// ==========================================================



// Rectangle Perimeter

function rectanglePerimeter(){


    const length =
        parseFloat(
            document.getElementById("perimeterLength").value
        );


    const width =
        parseFloat(
            document.getElementById("perimeterWidth").value
        );


    const result =
        document.getElementById("rectanglePerimeterResult");



    if(isNaN(length) || isNaN(width)){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Perimeter = <b>" +
        (2 * (length + width))
        +
        "</b>";

}







// Square Perimeter

function squarePerimeter(){


    const side =
        parseFloat(
            document.getElementById("perimeterSide").value
        );


    const result =
        document.getElementById("squarePerimeterResult");



    if(isNaN(side)){


        result.innerHTML =
            "Enter a valid number.";

        return;

    }



    result.innerHTML =
        "Perimeter = <b>" +
        (4 * side)
        +
        "</b>";

}







// Triangle Perimeter

function trianglePerimeter(){


    const a =
        parseFloat(
            document.getElementById("triangleSideA").value
        );


    const b =
        parseFloat(
            document.getElementById("triangleSideB").value
        );


    const c =
        parseFloat(
            document.getElementById("triangleSideC").value
        );



    const result =
        document.getElementById("trianglePerimeterResult");



    if(
        isNaN(a) ||
        isNaN(b) ||
        isNaN(c)
    ){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Perimeter = <b>" +
        (a + b + c)
        +
        "</b>";

}







// Circle Perimeter / Circumference

function circlePerimeter(){


    const radius =
        parseFloat(
            document.getElementById("circlePerimeterRadius").value
        );


    const result =
        document.getElementById("circlePerimeterResult");



    if(isNaN(radius)){


        result.innerHTML =
            "Enter a valid radius.";

        return;

    }



    result.innerHTML =
        "Circumference = <b>" +
        (2 * Math.PI * radius)
        .toFixed(2)
        +
        "</b>";

}







// Parallelogram Perimeter

function parallelogramPerimeter(){


    const base =
        parseFloat(
            document.getElementById("paraPerimeterBase").value
        );


    const side =
        parseFloat(
            document.getElementById("paraPerimeterSide").value
        );



    const result =
        document.getElementById("parallelogramPerimeterResult");



    if(isNaN(base) || isNaN(side)){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Perimeter = <b>" +
        (2 * (base + side))
        +
        "</b>";

}

// ==========================================================
//                    VOLUME CALCULATOR
// ==========================================================



// Cube Volume

function cubeVolume(){


    const side =
        parseFloat(
            document.getElementById("cubeSide").value
        );


    const result =
        document.getElementById("cubeResult");



    if(isNaN(side)){


        result.innerHTML =
            "Enter a valid number.";

        return;

    }



    result.innerHTML =
        "Volume = <b>" +
        Math.pow(side,3)
        +
        "</b>";

}







// Rectangular Prism Volume

function rectangularPrismVolume(){


    const length =
        parseFloat(
            document.getElementById("prismLength").value
        );


    const width =
        parseFloat(
            document.getElementById("prismWidth").value
        );


    const height =
        parseFloat(
            document.getElementById("prismHeight").value
        );



    const result =
        document.getElementById("prismResult");



    if(
        isNaN(length) ||
        isNaN(width) ||
        isNaN(height)
    ){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Volume = <b>" +
        (length * width * height)
        +
        "</b>";

}







// Cylinder Volume

function cylinderVolume(){


    const radius =
        parseFloat(
            document.getElementById("cylinderRadius").value
        );


    const height =
        parseFloat(
            document.getElementById("cylinderHeight").value
        );



    const result =
        document.getElementById("cylinderResult");



    if(
        isNaN(radius) ||
        isNaN(height)
    ){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Volume = <b>" +
        (
            Math.PI *
            radius *
            radius *
            height
        )
        .toFixed(2)
        +
        "</b>";

}







// Cone Volume

function coneVolume(){


    const radius =
        parseFloat(
            document.getElementById("coneRadius").value
        );


    const height =
        parseFloat(
            document.getElementById("coneHeight").value
        );



    const result =
        document.getElementById("coneResult");



    if(
        isNaN(radius) ||
        isNaN(height)
    ){


        result.innerHTML =
            "Enter valid numbers.";

        return;

    }



    result.innerHTML =
        "Volume = <b>" +
        (
            (Math.PI *
            radius *
            radius *
            height) / 3
        )
        .toFixed(2)
        +
        "</b>";

}







// Sphere Volume

function sphereVolume(){


    const radius =
        parseFloat(
            document.getElementById("sphereRadius").value
        );



    const result =
        document.getElementById("sphereResult");



    if(isNaN(radius)){


        result.innerHTML =
            "Enter a valid radius.";

        return;

    }



    result.innerHTML =
        "Volume = <b>" +
        (
            (4/3) *
            Math.PI *
            Math.pow(radius,3)
        )
        .toFixed(2)
        +
        "</b>";

}
// ==========================================================
//                    PAGE INITIALIZATION
// ==========================================================


document.addEventListener(
    "DOMContentLoaded",
    function(){


        // Hide all shape calculators initially

        document
        .querySelectorAll(".shape-box")
        .forEach(box=>{


            box.style.display = "none";


        });



        // Set active navbar automatically

        const currentPage =
            window.location.pathname
            .split("/")
            .pop();



        document
        .querySelectorAll(".nav-links a")
        .forEach(link=>{


            const page =
                link
                .getAttribute("href")
                ?.split("/")
                .pop();



            if(page === currentPage){


                link.classList.add("active");


            }


        });



    }
);







// ==========================================================
//                  SHAPE SELECTOR ANIMATION
// ==========================================================


function showShape(shape){


    const boxes =
        document.querySelectorAll(".shape-box");



    boxes.forEach(box=>{


        box.style.display = "none";


    });



    const selected =
        document.getElementById(shape);



    if(selected){


        selected.style.display =
            "block";


        selected.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });


    }


}







// ==========================================================
//                  KEYBOARD SUPPORT
// ==========================================================


document.addEventListener(
    "keydown",
    function(event){


        if(!display)
            return;



        // Numbers and operators

        if(
            "0123456789+-*/()."
            .includes(event.key)
        ){


            appendValue(event.key);


        }



        // Enter = calculate

        if(event.key === "Enter"){


            calculate();


        }



        // Backspace

        if(event.key === "Backspace"){


            deleteLast();


        }



        // Escape

        if(event.key === "Escape"){


            clearDisplay();


        }


    }
);







// ==========================================================
//                  BUTTON PRESS EFFECT
// ==========================================================


document
.querySelectorAll("button")
.forEach(button=>{


    button.addEventListener(
        "click",
        ()=>{


            button.style.transform =
                "scale(.96)";



            setTimeout(()=>{


                button.style.transform =
                    "";


            },100);



        }
    );


});