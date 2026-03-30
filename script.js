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

    const currentNum = operator === "" ? n1 : n2;
    point.disabled = currentNum.includes(".");

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
    if (event.code === "Enter" || event.key === "=") {
        event.preventDefault();
        calculateResult()
        calculated = true;
    } else if(["0","1","2","3","4","5","6","7","8","9","."].includes(event.key)) {
        if (calculated === true) {n1 = "",n2 = "",operator = ""};
        if(operator === "") {
            n1 += event.key;
        } else {
            n2 += event.key;
        } 
        num.textContent = operator === "" ? n1 : n2;
        calculated = false
    } else if (["+", "-", "x", "/"].includes(event.key)) {
        if ( n1 != "" && n2 != "" && operator != "") {
            calculateResult()
            n1 = n,n2 = "",operator = "";
        } else if (calculated === true) {n1 = n,n2 = "",operator = ""};  
        operator = event.key;
        num.textContent = operator;
        calculated = false
    };
    if (event.code === "Space") {
        event.preventDefault()
            if(operator === "") {
                n1 = n1.slice(0,-1);
            } else {
                n2 = n2.slice(0,-1);
            }
        num.textContent = operator === "" ? n1 : n2
    }
    result.appendChild(num);
}) 

   // ver alguma forma de utilizar o calculator com todas as logicas aqui pro teclado , onde devo chamar essa funcao