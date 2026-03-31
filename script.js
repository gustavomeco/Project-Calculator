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
    const value = event.target.innerText;
    calculatorLogic(value);
}

function clear(){
    result.innerText = "";
    n1 = "",n2 = "",operator = "";
    num.textContent = "";
    point.disabled = false;
}

function calculateResult() {
    if (n2 == 0 && operator === "/") {
        num.innerText = "error lil bro";
    } else {
        num.textContent = Math.round(operate(parseFloat(n1),parseFloat(n2),operator) * 100) / 100;
    }
 
    n = num.innerText;
}

btn.addEventListener("click", calculator);


document.addEventListener('keydown', (event) => {
    const value = event.key;
    event.preventDefault();
    calculatorLogic(value);
}) 

function calculatorLogic(call) {
      if (call === "=" || call === "Enter"){
        calculateResult()
        calculated = true;
    } else if (["0","1","2","3","4","5","6","7","8","9","."].includes(call)) {
        if (calculated === true) {n1 = "",n2 = "",operator = ""};
        if (operator === "") {
            n1 += call;
            num.textContent = n1;    
        } else {
            n2 += call;
            num.textContent = n2; 
        }
        calculated = false
    } else if(["+", "-", "x", "/"].includes(call)) {
        if ( n1 != "" && n2 != "" && operator != "") {
        calculateResult()
        n1 = n,n2 = "",operator = "";
        } else if (calculated === true) {n1 = n,n2 = "",operator = ""};  
        operator = call;
        result.innerText = "";
        num.textContent = operator;
        calculated = false
    } else if(call === "CE") {
        clear();
        calculated = false
    };
     result.appendChild(num);

    const currentNum = operator === "" ? n1 : n2;
    point.disabled = currentNum.includes(".");

    if (call === " " || call === "Backspace") {
            if(operator === "") {
                n1 = n1.slice(0,-1);
            } else {
                n2 = n2.slice(0,-1);
            }
        num.textContent = operator === "" ? n1 : n2
    }
}