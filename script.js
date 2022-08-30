function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

function operate(){
    let first = Number(prompt("first number"));
    let second = Number(prompt("second number"));
    let operator = prompt("what operator do you want?");
    
    if(operator == "add"){
        console.log(add(first,second));
    }else if(operator == "subtract"){
        console.log(subtract(first,second));
    }else if(operator == "multiply"){
        console.log(multiply(first,second));
    }else if(operator == "divide"){
        console.log(divide(first,second));
    };
};

operate();
