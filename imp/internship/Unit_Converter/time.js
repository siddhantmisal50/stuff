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

    //Seconds section
    if(inputTypeValue === "seconds" && resultTypeValue==="seconds"){
        result.value = input.value;
    }
    else if(inputTypeValue === "seconds" && resultTypeValue==="hour"){
        let output = (parseFloat(input.value)) / 3600;
        result.value = parseFloat(output.toFixed(8));
    }
    else if(inputTypeValue === "seconds" && resultTypeValue==="minutes"){
        let output = (parseFloat(input.value)) / 60;
        result.value = parseFloat(output.toFixed(8));
    }

    //Hour section
    if(inputTypeValue === "hour" && resultTypeValue==="seconds"){
        let output = (parseFloat(input.value)) * 3600;
        result.value = parseFloat(output.toFixed(8));
    }
    else if(inputTypeValue === "hour" && resultTypeValue==="hour"){
        result.value = input.value;
    }
    else if(inputTypeValue === "hour" && resultTypeValue==="minutes"){
        let output = (parseFloat(input.value)) * 60;
        result.value = parseFloat(output.toFixed(8));
    }

    //Minutes section
    if(inputTypeValue === "minutes" && resultTypeValue==="seconds"){
        let output = (parseFloat(input.value)) * 60;
        result.value = parseFloat(output.toFixed(8));
    }
    else if(inputTypeValue === "minutes" && resultTypeValue==="hour"){
        let output = (parseFloat(input.value)) / 60;
        result.value = parseFloat(output.toFixed(8));
    }
    else if(inputTypeValue === "minutes" && resultTypeValue==="minutes"){
        result.value = input.value;
    }
}
