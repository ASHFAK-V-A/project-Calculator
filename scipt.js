
function buttonclicked(res){

    console.log(res);
    document.getElementById("screen").value= document.getElementById("screen").value+res;

}


function btnclear(){

 document.getElementById("screen").value=" ";

}

function eqbutton(){

   var text= document.getElementById("screen").value


    var result=eval(text);


    document.getElementById('screen').value=result


}