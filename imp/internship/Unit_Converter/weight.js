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

    //kilogram section
    if(inputTypeValue === "kilogram" && resultTypeValue==="kilogram"){
        result.value = input.value;
    }
    else if(inputTypeValue === "kilogram" && resultTypeValue==="pound"){
        let output = (parseFloat(input.value)) * 2.205;
        result.value = parseFloat(output.toFixed(3));
    }
    else if(inputTypeValue === "kilogram" && resultTypeValue==="ounce"){
        let output = (parseFloat(input.value)) * 35.274;
        result.value = parseFloat(output.toFixed(3));
    }

    //pound section
    if(inputTypeValue === "pound" && resultTypeValue==="kilogram"){
        let output = (parseFloat(input.value)) / 2.205;
        result.value = parseFloat(output.toFixed(3));
    }
    else if(inputTypeValue === "pound" && resultTypeValue==="pound"){
        result.value = input.value;
    }
    else if(inputTypeValue === "pound" && resultTypeValue==="ounce"){
        let output = (parseFloat(input.value)) * 16;
        result.value = parseFloat(output.toFixed(3));
    }

    //ounce section
    if(inputTypeValue === "ounce" && resultTypeValue==="kilogram"){
        let output = (parseFloat(input.value)) / 35.274;
        result.value = parseFloat(output.toFixed(3));
    }
    else if(inputTypeValue === "ounce" && resultTypeValue==="pound"){
        let output = (parseFloat(input.value)) / 16;
        result.value = parseFloat(output.toFixed(3));
    }
    else if(inputTypeValue === "ounce" && resultTypeValue==="ounce"){
        result.value = input.value;
    }
}
