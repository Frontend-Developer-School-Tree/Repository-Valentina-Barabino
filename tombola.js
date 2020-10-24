/* * challenge 
  * 
  * La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola
  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
  *  
  */

 
 const scheda = [34, 45, 67, 80, 90, 22, 29, 8, 18, 26]
 
 let max = 90
 let min = 1
 let i = 0
 let inputArr = []
 let vinti = 0

 do {
  //console.log(inputArr)
     let randomNumber = Math.round(Math.random() * (max - min)) + min
     
     const pushIfUnique = ((inputArr,newElem)=>{
        if((inputArr.includes(newElem)) == false){
             i++
             inputArr.push(newElem)
          
        if (scheda.includes(newElem) == true){
            console.log(newElem)
            vinti++
           }
            return inputArr
        }
  })
 res = (pushIfUnique(inputArr,randomNumber))
 //console.log(vinti)
 //console.log(Array.isArray(vinti))
 //console.log(vinti.sort())
 } while (i <= 9)

 let mScheda = "I tuoi numeri sono" + " " + scheda
 let mEstratti = "I numeri estratti sono" + " " + res
 console.log(mScheda)
 console.log(mEstratti)
 document.write(mScheda)
 document.write('<br>' + mEstratti)

switch (vinti) {
 case 2: 
 r = 'Hai fatto ambo';
 break;
 case 3: 
 r = 'Hai fatto terna'
 break;
 case 4: 
 r = 'Hai fatto quaterna'
 break;
 case 5: 
 r = 'Hai fatto cinquina'
 break;
 case 6: 
 r = 'Hai fatto 6 punti'
 break;
 case 7: 
 r = 'Hai fatto 7 punti'
 break;
 case 8: 
 r = 'Hai fatto 8 punti'
 break;
 case 9: 
 r = 'Hai fatto 9 punti'
 break;
 case 10: 
 r = 'Hai fatto tombola'
 break;
 default:
 r = 'Mi dispiace hai perso!'
}

console.log(r)
document.write('<br>'+ r)



 





 


 
