let formulaTxt;
function parseFormula(){
    formulaTxt = document.getElementById("formulaField").value;
    console.log(formulaTxt);
    if(!formulaTxt){
        alert("Enter Some text in formula field.");
    }else {
        //alert("Parsing in progress.");
        checkFormula(formulaTxt);
    }
}


function checkFormula(formulaTxt){
    console.log('Parsing Formula:', formulaTxt );
    let result;
    formulaTxt = formulaTxt.replace(/[\s\n]/g, '');
    const opPatt = new RegExp(/[*-+/^]/, "i");
    if(formulaTxt.search(opPatt)){
        const index = formulaTxt.search(opPatt);        
        result = calcExp(formulaTxt.substring(0, index), formulaTxt.substring(index+1), formulaTxt.charAt(index));
    }
    //let result = ;
    console.log('result', result);
    updateStatusMsg(result);
    // const bracPatt = new RegExp(/\(*\)/, "i");
    // let initExp = bracPatt.test(formulaTxt);
    // console.log(initExp);

}


function calcExp(operand1, operand2, operator){
    console.log(operand1,'|', operand2,'|', operator);
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    switch(operator){
        case '*': 
            return operand1 * operand2;
        case '+': 
            return operand1 + operand2;
        case '-': 
            return operand1 - operand2;
        case '/': 
            return operand1 / operand2;
        case '^': 
            return operand1 ^ operand2;
        default:
            console.log('Not a Proper Operator');
    }

}


function updateStatusMsg(msg){
    document.getElementById('statusMsg').innerHTML = msg;
}