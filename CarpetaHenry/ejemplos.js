var nombre='mario';

console.log(nombre.charAt(0).toUpperCase()+nombre.slice(1));

//Y asi se pasa algo a mayusculas



var objeto={
    'a':1,
    'b':2,
    'c':3
};
var array=Object.entries(objeto);
console.log(array);

var string='soyHENRY';

var letras=string.split('');

   var mayus=[];
   var minus=[];

   for (let i = 0; i < letras.length; i++) {
      if(letras[i]!==letras[i].toUpperCase()){         
         minus.push(letras[i]);
      }
      else{
        mayus.push(letras[i]);
      }
      
   }
   var minusM=minus.join('');
   var mayusM=mayus.join('')
   
   union=mayusM+minusM;
   console.log(union);
//var union=letras.join('');
//console.log(union);
String.prototype.reverse=function(){
    var cadena=this.split('');
    var cadenaInvertida=[];
    for(let i=0;i<cadena.length;i++){
       cadenaInvertida.unshift(cadena[i]);
    }
    var cadenaReverse=cadenaInvertida.join('');
    return cadenaReverse;
 };


 var arrayOfStrings=["You", "are","I","think","beautiful", "looking"];

 arrayOfStrings.sort((a,b)=>(a.length-b.length));

 console.log(arrayOfStrings);


 function frecuencias(frase) {
    let result = {};
    for(let c of frase.split('')) {
        if (c == ' ')
            continue;

        if (!result[c])
            result[c] = 1;
        else
            result[c]++;

    }

return result;
}
//var string="jdsfbbaaddaa";
////var ordenada= letras.split('');
////ordenada.sort();
//var ordenadas=ordenada.join('');


var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
var amiwo;
for (const amigo of amigos) {
    if(amigo['nombre']==='toni'){
        amiwo=amigo;
    }
    
}

var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];
var nombres=[];
nombres=productos.map(function(product){
    return product.name;
})

console.log(nombres);

var nume=[5,3,2,9,15,24,4];

nume.sort((a,b)=>(b-a));
console.log(nume);


var abcd=[2,5,7,10,11,15,20];
var n=13
var suma;

  for (let i = 0; i < abcd.length; i++) {
    for (let y = 0; y < abcd.length; y++) {
      if(abcd[i]===abcd[y]){
        continue;
      }else{
        suma=abcd[i]+abcd[y];
        console.log(suma);
        if(suma===n){
          return true;
        }
      }
      
    }
  }
  
