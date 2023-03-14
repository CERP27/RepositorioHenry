/*var listaDeCompras =[];

listaDeCompras[3]="Tomates";

listaDeCompras[1]="Lechugas";

console.log(listaDeCompras.length);

var elementoDelArray=listaDeCompras[1];*/
//console.log(elementoDelArray);

//Metodos mas utilizados de los Arreglos

//Agregar elementos

/*var colores =['amarillo','azul'];

colores.push('rojo'); //agregar al final
colores.unshift('verde'); //agregar al principio
console.log(colores);
colores.pop(); //eliminar el elemento en la ultima posicion
colores.shift();//eliminar el primer elemento

console.log(colores);*/

//Metodo Include, sirve para saber si nuestro array contiene cierto elemento

/*var pintores =['Picasso', 'Velazquez','Van Gogh','Dali'];
var incluyeDali=pintores.includes('Moneth');
console.log(incluyeDali);*/

//Metodo Every, sirve para saber si todos los elementos de un array cumplen una condicion

/*var numeros=[7,6,8,9];
var cumplenCondicion=numeros.every((num)=> {return num>5});
console.log(cumplenCondicion);*/

//Metodo Split y Join

/*var palabra='Henri';
var palabraSeparada=palabra.split('');
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

var palabraArreglada=palabraSeparada.join('');
console.log(palabraArreglada);*/

//Metodos para recorrer Arrays
//ForEach

/*var numeros=[1,2,3,4];

numeros.forEach((num)=> console.log(num));
numeros.forEach((num)=> {if(num===3){console.log(num);}});*/

//Metodo Map

/*var masUno=numeros.map((num)=>{
    return num+1;
});
console.log(masUno);*/

//Bucles en los arreglos

/*var array =[1,2,3,4,5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}*/


/*function encontrarLetraP(string){
    var letras =string.split('');
    for (let i = 0; i < letras.length; i++) {
        
        if(letras[i].toLowerCase()==='p'){
            console.log('Si contiene a P');
        }
    }
}

encontrarLetraP('Javascript');
encontrarLetraP('HenryP');*/

//Bucle While en arrays

var arr=[];

while (arr.length<5) {
    arr.push('BOOM');
}
console.log(arr);

