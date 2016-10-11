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
 request.open('GET','http://ankitnau25.imad.hasura-app.io/counter',true);
 request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make arequest to the server and send a name
    //captue a list of nmes and render it as list
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list<='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};