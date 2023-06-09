var l1=0,l2=0,l3=0,area,s,Texto=""
function cap1()
{
    l1 = document.getElementById('l1').value
    l1 = Number.parseFloat (l1)
}
function cap2()
{
    l2 = document.getElementById('l2').value
    l2 = Number.parseFloat (l2)
}
function cap3()
{
    l3 = document.getElementById('l3').value
    l3 = Number.parseFloat (l3)
}
function vali()
{
  if(l1==l2 && l2==l3 && l1==l3) {
    Texto= (' El triangulo es equilatero ');
    document.getElementById('mm').innerHTML=Texto
  }

else if(l1==l2 && l2!=l3 && l3!=l1 || l1!=l2 && l2==l3 && l3!=l1||l1!=l2&&l2!=l3&&l3==l1) {
    
    Texto= (' El triangulo es isosceles ');
    document.getElementById('mm').innerHTML=Texto
    
} 
else if(l1!=l2&&l2!=l3&&l3!=l1)
{
    Texto= (' El triangulo es escaleno ');
    document.getElementById('mm').innerHTML=Texto;
}
}
function peri()
{
    s=l1+l2+l3
    Texto="EL perimetro del triangulo es: " + s;
    document.getElementById('mm').innerHTML=Texto
}
function area()
{
  if(l1+l2>l3&&l1+l3>l2&&l2+l3>l2)
  {
    s = (l1+l2+l3)/2
    max = Math.max(l1,l2,l3)
    a= Math.sqrt(s*(s-l1)*(s-l2)*(s-l3))
    Texto = "El area del triangulo es igual a: "+(a);
    document.getElementById('mm').innerHTML=Texto 
  }
  else
  {
    Texto="no se pude calcular"
    document.getElementById('mm').innerHTML=Texto
  }
}
