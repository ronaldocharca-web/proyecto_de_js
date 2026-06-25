var n,i,a,b,c;
n=parseInt(prompt("INGRESE LA CANTIDAD PARA EL FIBBONASSI"));
a=-1;
b=1;
for(i=1;i<=n;i++)
{
    c=a+b;
    a=b;
    b=c;
    document.writeln("<font size='30' color='red'>--"+c+"--</font>")
}
