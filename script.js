function calculate(operation){
    let num1=Number(document.querySelector("#num1").value);
    let num2=Number(document.querySelector("#num2").value);;
    let result;
    if(operation === "add"){
        result=num1+num2;
    }
    if(operation === "subtract"){
        result=num1-num2;
    }
    if(operation === "multiply"){
        result=num1*num2;
    }
    if(operation === "divide"){
        result=num1/num2;
    }
    document.querySelector("#result").textContent = result;
}