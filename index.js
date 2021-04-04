var a = 10;
var i=0;

    setTimeout(()=>{document.getElementById('display').innerHTML=a;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML=a-i;i++;
       setTimeout(()=>{document.getElementById('display').innerHTML="Happy Independence Day!";},1000);
    },1000);},1000);},1000);},1000);},1000);},1000);},1000);},1000);},1000);},1000);},1000);

var p = document.createElement("h1");
p.setAttribute('id','display');
p.setAttribute('style','text-align:center;color:green');
document.body.append(p);
