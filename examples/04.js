var request;

if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}
else{
    request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET','data.txt');
request.onreadystatechange=function(){
    if((request.readyState===4) && (request.status===200)){
        var modify = document.getElementsByTagName('li');
        
//        This is for the loop to target all li items
//        for(var x = 0; x < modify.length; x++){
//        modify[x].innerHTML = request.responseText;}
        
//        This will target one li element
        modify[1].innerHTML = request.responseText;
    }
}

request.send();