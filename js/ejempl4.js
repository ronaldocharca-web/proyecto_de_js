function uno(){
var x,d,s;
x=parseInt(prompt("INGRESE UN VALOR PARA X"));
s=0;
while(x!=0)
{
    d=x%10;
    x=parseInt(x/10);
    s=s+d;
}
document.writeln("LA SUMA DE LOS DIGITOS ES: "+s);
}