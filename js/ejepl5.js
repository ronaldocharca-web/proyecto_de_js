
function uno(){

    alert("De la patria el alto nombre en glorioso esplendor conservemos, y en sus aras de nuevo juremos morir antes que esclavos vivir.");
    }
function dos()
{
    var n,i,a,b,c,d;
    d=0;
n=parseInt(prompt("INGRESE LA CANTIDAD PARA EL FIBBONASSI"));
a=-1;
b=1;
for(i=1;i<=n;i++)
{
    c=a+b;
    a=b;
    b=c;
    d=d*10+c
}
alert("0"+d)
}
