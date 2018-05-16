//Example of asynchrnoous request - they can run in the background when another is runnning in frontend.

var request = new XMLHttpRequest();
request.open('GET','data.txt');
//the third parameter is true/ false true is default true is asynchrnous

request.onreadystatechange = function(){
    if((request.readyState===4) && (request.status==200)){
        console.log(request);
        document.writeln(request.responseText);
    }
}

request.send();