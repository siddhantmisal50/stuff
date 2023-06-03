var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

// adding eventListeners
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //kelvin section
    if(inputTypeValue === "kelvin" && resultTypeValue==="kelvin"){
        result.value = input.value;
    }
    else if(inputTypeValue === "kelvin" && resultTypeValue==="celcius"){
        let output = (parseFloat(input.value))-273.15;
        result.value = parseFloat(output.toFixed(2));
    }
    else if(inputTypeValue === "kelvin" && resultTypeValue==="fahrenheit"){
        let output = (((parseFloat(input.value))-273.15)*1.8)+32;
        result.value = parseFloat(output.toFixed(2));
    }

    //celcius section
    if(inputTypeValue === "celcius" && resultTypeValue==="kelvin"){
        let output = (parseFloat(input.value))+273.15;
        result.value = parseFloat(output.toFixed(2));
    }
    else if(inputTypeValue === "celcius" && resultTypeValue==="celcius"){
        result.value = input.value;
    }
    else if(inputTypeValue === "celcius" && resultTypeValue==="fahrenheit"){
        
        let output = (parseFloat(input.value)*9/5)+32;
        result.value = parseFloat(output.toFixed(2));
    }

    //fahrenheit section
    if(inputTypeValue === "fahrenheit" && resultTypeValue==="kelvin"){
        let output = ((parseFloat(input.value)-32)/1.8)+273.15;
        result.value = parseFloat(output.toFixed(2));
    }
    else if(inputTypeValue === "fahrenheit" && resultTypeValue==="celcius"){
        let output = (parseFloat(input.value)-32) * 5/9;
        result.value = parseFloat(output.toFixed(2));
    }
    else if(inputTypeValue === "fahrenheit" && resultTypeValue==="fahrenheit"){
        result.value = input.value;
    }
}
