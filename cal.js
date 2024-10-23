document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", calculate);
});


//selecting input box values

function calculate(){
    var p=document.getElementById('Physics').value;
    var c=document.getElementById('Chemistry').value;
    var m=document.getElementById('Maths').value;
    var p1=parseFloat(p)/2;
    var p2=parseFloat(c)/2;
    var total=p1+p2+parseFloat(m);
    document.getElementById('result').innerText=total;
}