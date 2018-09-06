//console.log('Java script ');

function calc(){
    //e.preventDefault();
     var c;
    var val1= Number(document.getElementById('sal').value);
    var val2= Number(document.getElementById('exp').value);
     
    var c=val1-val2;

    document.getElementById("result").value=c; 
    //parseInt(document.getElementById('result').value=val1-val2);
}