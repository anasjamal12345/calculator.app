function getResult(num) {
    var input = document.getElementById("get-input")
    input.value += num
}

function calculation() {
    var calculate = document.getElementById("get-input")
     calculate.value = eval(calculate.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}

function clearResult() {
   var clear = document.getElementById("get-input")
   clear.value = ""
}
