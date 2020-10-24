// Array
/** Array - esercizio 1
 * 
 * 
 * aggiungere un elemento all'inizio dell'array
 * 
 * 1° "hello" 
 * 2° 100
 * 
 * const myArray = [true,null]
 * 
 */

/* const myArray = [true,null]
myArray.unshift(100)
myArray.unshift("hello")
console.log(myArray) */




/** Array - esercizio 2
 * 
 * const array = [1,2]
 * 
 * aggiungere un elemento ad una specifica index
 * elemento "abc" -> index 10
 * 
 * calcolare la lunghezza finale // 11
 * 
 */
/* const array = [1,2]
array[10] = 'abc'
console.log(array)
console.log(array.length) */




/** Array - esercizio 3
 * 
 * 
 * creare un array di 4 oggetti
 * 
 * Ogni oggetto deve avere almeno una marca, un prezzo e un colore
 * 
 * Infine aggiungi un ulteriore oggetto
 * 
 */

/* let auto = [
  auto1 = {
    marca: 'Ford',
    prezzo: '20000',
    colore: 'nero'
  },
  auto2 = {
    marca: 'Citroen',
    prezzo: '16000',
    colore: 'bianco'
  },
  auto3 = {
    marca: 'Suzuki',
    prezzo: '22000',
    colore: 'grigio'
  },
  auto4 = {
    marca: 'Fiat',
    prezzo: '14000',
    colore: 'rosso'
  }
];

  let auto5 = {
    marca: 'Dacia',
    prezzo: '15000',
    colore: 'nero'
  }

auto.push(auto5)

console.log(auto)
 */




// Loop 
/* Loop esercizio 1
* generate 4 cifre random, il range è da 1000 a 9999.
* Assicuratevi che questo numero random non si accoppi con alcuno dei numeri nell'array
* se trovare un match hai bisogno di generare 4 nuove cifre
* se non trovi un match, il numero è unico, allora aggiungi nell'array.

const myNumb = [2345, 3245, 7925, 5234, 4532]

*/
/* let myNumb = [null]
  function newNumberRandom(min,max){
    let random = Math.floor(Math.random() * (max - min ) + min );
        for(valore of myNumb){
            if(valore != random){
                console.log('numero aggiunto')
                myNumb.push(random)
            }else{
                 console.log('il numero è uguale, generane uno nuovo')
               let nuovoRandom = Math.floor(Math.random() * (max - min ) + min );
              myNumb.push(nuovoRandom)
            }
            return myNumb
    }
   }
 
  for( i = 0; i<4; i++ ) { 
    console.log(newNumberRandom(1000,9999))
  } */

   


// Array methods

/** forEach() - esercizio 1 
 *  calcola la somma degli elementi di un array
 * 
 * const numbers = [1,2,3,4,5,6,20,15,30];
 * 
 * 
 */
/* let t = 0;
const numbers = [1,2,3,4,5,6,20,15,30];
numbers.forEach(function (item) { 
  t += item;
  return t;
}); 
console.log(t); */




/**  - esercizio 
 * const lettere = ['a','b','a','b','c','d','a'];
 * realizzare un oggetto che tenga traccia del numero di lettere presente nell'array
 * 
 * 
 * let count = {};
 * 
 * 
 */
/* const lettere = ['a','b','a','b','c','d','a'];
let count = {};

lettere.forEach( item => {
       if(count[item]){
           count[item]++
       }else{
          count[item] = 1 
          console.log(count[item])
          }
  })
console.log(count)
   */



/** - esercizio 
 * fa un array di elementi JSON crea un array "posts"
 * 
 * const postsJSON = [
 *      '{ "idPost": 1222, "commenti":1 }',
 *      '{ "idPost": 6143, "commenti":32}',
 *      '{ "idPost": 7281, "commenti":12}' 
 * ]

 */
/* const postsJSON = [
        '{ "idPost": 1222, "commenti":1 }',
        '{ "idPost": 6143, "commenti":32}',
        '{ "idPost": 7281, "commenti":12}' 
   ]
const posts = postsJSON.map((element)=>{
return JSON.parse(element)
})
console.log(posts)
console.log(postsJSON) */



/** esercizio 2
    TRASFORMARE IN MAIUSCOLO
 * 
 * esempio 
 * 
 * (allons y!) => ALLONS Y
 * 
 * (geronimo) => geronimo
 * 
 */
 /* let v = prompt('inserire stringa')
 console.log(v.toUpperCase()) */




/** esercizio 3
 * 
 * partendo da un Array di prodotti genera un array contenente il valore totale dei prodotti presenti
 * 
 * esempio 
 * 
 * const prodotti = [
 *      {
 *         nomeProdotto:"mac book pro",
 *         prezzo:3000,
 *         quantita:15;
 *      },
 *      {
 *         nomeProdotto:"samsung 9plus",
 *         prezzo:935,
 *         quantita:5;
 *      },
 *      {
 *         nomeProdotto:"synology",
 *         prezzo:900,
 *         quantita:3;
 *      },
 * ]
 * 
 * 

 */
/*
let s = 0;
const prodotti = [
       {
          nomeProdotto:"mac book pro",
          prezzo:3000,
          quantita:15
       },
       {
          nomeProdotto:"samsung 9plus",
         prezzo:935,
          quantita:5
       },
        {
          nomeProdotto:"synology",
          prezzo:900,
          quantita:3
        },
   ]

const nuovoArray = prodotti.map( correnteValore => correnteValore.prezzo * correnteValore.quantita)
 
console.log(nuovoArray) 
*/



/** map() - esercizio 4 
 * trasforma un array di stringhe in un array di numeri
 * 
 * const stringhe = ['1','2','3','4','5'];
 * 

 * 
 */
/* const stringhe = ['1','2','3','4','5'];

const nuovoArray = stringhe.map( correnteValore => +correnteValore )
 
console.log(nuovoArray)  */




/**  esercizio 1
 * verificare quali utenti hanno la maggiore età  
 */
  /* const persone = [{name:"Brad",eta:15},{name:"Marika",eta:25},{name:"Roby",eta:17},{name:"Sarah",eta:19}]
  const adulti = persone.filter(persona => persona.eta >= 18)
  console.log(adulti) */



  /** reduce() - esercizio 
   * crea una funzione "popularPostsId" con due parametri "posts" e "minimalCommentsQuantity"
   * Questa funzione dovrà ritornare un array di postIds dei posts che hanno una quantità di "commenti" almeno della quantitàminima
   * 
   */
/*   const posts = [
    {
      title:"Come trovare lavoro come js developer?",
      postId:321,
      comments:25
    },
    {
      title:"È complicato Es6",
      postId:213,
      comments:5
    },
    {
      title:"React o Angular?",
      postId:123,
      comments:12
    },
] */

/* function popularPostsId(parametro1,parametro2){
        return parametro1.reduce((accumulatore,post)=>{
        
             if(post.comments >= parametro2){
               accumulatore.push(post.postId)
             }
               return accumulatore
        },[])
    } 

console.log(popularPostsId(posts,10)) */




   /** reduce() - esercizio 2 TODO
    * 
    * Create una funzione "quantityByCateg" con un parametro "products"
    * 
    * Questa funzione dovrà ritornare un oggetto con chiavi uguali di categorie e valori uguali alla somma di tutte le quantita
    * in ogni categoria
    */
  /*  const products = [
    {
      title:"Phone case",
      price:30,
      quantity:2,
      category:"Accessory"
    },
    {
      title:"Samsung 8plus",
      price:800,
      quantity:1,
      category:"Phone"
    },
    {
      title:"Headphones",
      price:70,
      quantity:1,
      category:"Accessory"
    },
    {
      title:"Sport Watch",
      price:100,
      quantity:2,
      category:"Watches"
    },
]
  */




/** funzioni - esercizio 1
 * Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
 * 
 */
/* 
function checkPal(parola) {
let p = parola.trim().split('').reverse().join('');
 if(parola == p) {
  console.log('TRUE')
 } else {
  console.log('FALSE')
 }
  return p
}

console.log(checkPal('anna')) */
 



/** Clousure - Esercizio 1  TODO
 * esercizio come riesco a non stamparlo 3 volte?
// let view;
// function inizializzazione(){
// 	view = 'panorama';
// 	console.log('la view è state set');
// }

// inizializzazione();
// inizializzazione();
// inizializzazione();
// console.log(view)
 * 
 *
 */
 



 /**Clousure esercizio - 2
  * 
  * come posso far uscire tutti i numeri?
  * 
  * 
  * 
  *  const array = [1,2,3,4];

    function forFun(){
    	for( var i = 0; i < array.length; i++){
    		setTimeout( () => {
    			console.log('Sono all\'indice ' + i);
    		},2000)
    	}

    forFun();
  */
/*  const array = [1,2,3,4];

    function forFun(){
    	for( var i = 1; i <= array.length; i++){
          console.log('Sono all\'indice ' + i);
    	}
    }
    forFun(); */




/**
 * 
 *  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).
  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36
 */

/* function getnday(giorno,mese) {
switch(mese-1) {
  case 1:
    g = 31
    break;
  case 2:
    g = 60
    break;
  case 3:
    g = 91
    break;
  case 4:
    g = 121
    break;
  case 5:
    g = 152
    break;
  case 6:
    g = 182
    break;
  case 7:
    g = 213
    break;
  case 8:
    g = 244
    break;
  case 9:
    g = 274
    break;
  case 10:
    g = 305
    break;
  case 11:
    g = 335
    break;
  default:
    g = 0 
}
let n = g + giorno  
return n
}
console.log(getnday(12,11))
  */
 
 
