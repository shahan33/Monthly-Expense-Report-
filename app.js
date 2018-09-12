//console.log('Java script ');

//function calc(){
    //e.preventDefault();
  //   var c;
    //var val1= Number(document.getElementById('sal').value);
    //var val2= Number(document.getElementById('exp').value);
     
   // var c=val1-val2;

  //  document.getElementById("result").value=c; 
    //parseInt(document.getElementById('result').value=val1-val2);
//}
//window.alert('Hello world');
// const input = prompt();
// alert(input);
// Alert for salary Created in javascript 


//var salary=prompt("Enter your Salary in Number");
//console.log(salary);
//document.getElementById('sal').value=salary;











function Adding(event){
    event.preventDefault();

//document.getElementById("myform").reset();


var table = document.getElementById("table");
var newRow = table.insertRow(table.length);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var exp  = document.getElementById("exp").value;
var amount = document.getElementById("amount").value;

    cell1.innerHTML = exp;
    cell2.innerHTML = amount;
    
    console.log("row is added sucessfuly");
    document.getElementById('myform').reset();
    
    //document.getElementById("submit").disabled = true;
}
//var one;
function sumofexpen(){
    var table1 = document.getElementById("table"), sumval =0;

    for(var i=1;i<table1.rows.length;i++){
        sumval =sumval + parseInt(table.rows[i].cells[1].innerHTML);
    }
    document.getElementById("sum").value =sumval;
     console.log(sumval);
     //one=sumval;
     //return sumofexpen();
     return sumval;
}


function calc(){
    var test1 = document.getElementById('sal').value;
    var test2 = sumofexpen();
    //var test3 = test1+test2;

    var FinalResult= parseInt(document.getElementById("result").value=test1-test2);
    console.log("your final result is :"+FinalResult);
}