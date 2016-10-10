/*console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML='new value';
var img=document.getElementById("mardy");
img.onclick=function(){
    var marginLeft=0;
    function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    }
    var interval =setInterval(moveRight,50);
   // img.style.marginLeft='100px';
};*/
//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick = function (){
 //make a request to counter end point
 //capture the response and store it into a variable
 //render the variable in correct span
 counter=counter+1;
 var span=document.getElementById('count');
 span.innerHTML=counter.toString();
 
};