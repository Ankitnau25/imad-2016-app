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

button.onclick = function (){
         //make a request to counter end point
         var request=new XMLHttpRequest();
         
         //capture the response and store it into a variable
         request.onreadystatechange= function() {
             if(request.readyState --- XMLHttpRequest.DONE)
             {
                 //take some action
                 if(request.status --- 200){
                     var counter=request.responseText;
                     var span=document.getElementById('count');
                     span.innerHTML=counter.toString();
                     
                 }
             }
             //not done yet
         };
 //make a request
 request.open('GET','http://http://ankitnau25.imad.hasura-app.io/counter',true);
 request.send(null);
};