// creare funzione che genera i numeri casuali


let randomUnoCento = randomNumber(0,100)


const numeriCasuali = [];

const numeriInseriti = [];

let numeriIndovinati = [];

let numbers = document.getElementById("numbers")
let numbersDisplay = document.getElementById("numbersDisplay");
let turn = 0;


numbers.innerText ="";

for(i=0; i < 5; i++){
    let randomUnoCento = randomNumber(0,100)
    numeriCasuali.push(randomUnoCento);

}





console.log(numeriCasuali);



// stampare a video i numeri 
numbers.innerText=numeriCasuali;

// rendere il tutto asincrono

//creare una funzione che generi il prompt

setTimeout(hide, 29000)

setTimeout(promptGenerator, 30000)


function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1))
}

function hide(){
    numbers.classList.add("un_show")
}



function promptGenerator(){

    for(i = 0; i < 5; i++){

        let domanda =  parseInt(prompt("Inserisci un numero"))
        
        numeriInseriti.push(domanda);

        numCorrect = numeriCasuali.includes(numeriInseriti[i]);

        if(numCorrect == true){
        console.log("giusto")
        numeriIndovinati.push(numeriInseriti[i])
        ;}

   }
   numbersDisplay.classList.add("show")

   if(numeriIndovinati.length == 0){
       numbersDisplay.innerText = (`Okay, 
       ora riprova con gli occhi aperti ;)`)
    }else if(numeriIndovinati.length == 1){
       numbersDisplay.innerText = (`Hai indovinato ${numeriIndovinati.length} numero su 5
       (${numeriIndovinati})
        Meglio farsi vedere da uno bravo...`)
   }else if(numeriIndovinati.length == 2){
       numbersDisplay.innerText = (`Hai indovinato ${numeriIndovinati.length} numeri  su 5
       (${numeriIndovinati})
        Memoria da pesce rosso...`)
   }else if(numeriIndovinati.length == 3){
       numbersDisplay.innerText = (`Hai indovinato ${numeriIndovinati.length} numeri  su 5 
       (${numeriIndovinati})
       Credo in te, al prossimo farai di meglio`)
   }else if(numeriIndovinati.length == 4){
       numbersDisplay.innerText = (`Hai indovinato ${numeriIndovinati.length} numeri su 5
       (${numeriIndovinati})
        Ottimo lavoro!`)
   }else if(numeriIndovinati.length == 5){
       numbersDisplay.innerText = (`What a pro!! Hai indovinato ${numeriIndovinati.length} numeri  su 5
       (${numeriIndovinati})`)
   }


}
