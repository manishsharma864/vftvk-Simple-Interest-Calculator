function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    if(p<=0){
       alert("Enter the positive no.");
    }
        
s=p*r*t;
u= new Date();
h= parseInt(u.getFullYear());
n=parseInt(t)
d=h+n;
document.getElementById("result").innerHTML = "if you deposit <mark>"+p+"</mark>,at an interest rate of<mark> "+r+"</mark>You will recieve amount of <mark>"+s+"</mark> in year <mark>"+d+"</mark>";
    
}
