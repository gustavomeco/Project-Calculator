let n1 = "",n2 = "",operator = "";
let n;
const result = document.querySelector("#results");
let num = document.createElement("div");
const btn = document.querySelector(".buttons");
let calculated = false;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;   
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,operator) {
    switch(operator) {
        case `+`:
            return add(a,b);    
        case `-`:
            return subtract(a,b);
        case `x`:
            return multiply(a,b);
        case `/`:
            return divide(a,b);            
    }

};


function calculator(event) {
    if (event.target.innerText === "="){
        calculateResult()
        calculated = true;
    } else if (event.target.parentElement.className === "numbers" ) {
        if (calculated === true) {n1 = "",n2 = "",operator = ""};
        if (operator === "") {
            n1 += event.target.innerText;
            num.textContent = n1;    
        } else {
            n2 += event.target.innerText;
            num.textContent = n2; 
        }
        calculated = false
    } else if(["+", "-", "x", "/"].includes(event.target.innerText)) {
        if ( n1 != "" && n2 != "" && operator != "") {
        calculateResult()
        n1 = n,n2 = "",operator = "";
        } else if (calculated === true) {n1 = n,n2 = "",operator = ""};  
        result.innerText = "";
        operator = event.target.innerText;
        num.textContent = operator;
        calculated = false
    } else if(event.target.id === "cancel") {
        clear();
        calculated = false
    };
     result.appendChild(num);
}

function clear(){
    result.innerText = "";
    n1 = "",n2 = "",operator = "";
    num.textContent = "";
}

function calculateResult() {
    num.textContent = Math.round(operate(parseFloat(n1),parseFloat(n2),operator) * 100) / 100;
    n = num.innerText;
    console.log("n1:", n1, "n2:", n2, "operator:", operator);
}

btn.addEventListener("click", calculator);