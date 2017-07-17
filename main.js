
let userInput = []; 
let words = ['Azalea', 'Aster', 'Begonia', 'Bellflower','Bluebell', 'Camellia', 'Chrysanthemum', 'Dahlia', 'Daffodil', 'Delphinium', 'Edelweiss', 'Freesia', 'Gladiolus', 'Hibiscus', 'Hyacinth', 'Iris', 
'Jasmine', 'Lilac',  'Lily', 'Lotus', 'Mimosa', 'Narciss', 'Orchid', 'Petunia', 'Rose', 'Sunflower', 'Tulip', 'Violet',].sort();
let randomWord = words[Math.floor(Math.random()*words.length)];
let chosenWord = randomWord.toLowerCase().split("");
let counter =0;
console.log(chosenWord);

    window.onload = function (){   
        let element = document.querySelector('#submitText');
        element.addEventListener('click', function(){
           
            userInputLetter();
            clearInputField ();
            winOrLose(); 
        });   
        startTheGame();  
    };



    function startTheGame (input){

        let letterDiv = document.getElementById('letters');
        console.log(letterDiv);
            for (let i = 0; i < chosenWord.length; i++){
                let createDivs = document.createElement('div');
                let createHeader = document.createElement('h1');
                createHeader.className = 'show'
                createDivs.className = 'hidden';
                createDivs.id = i
                createHeader.style.visibility="hidden";
                createHeader.innerHTML = chosenWord[i];
                letterDiv.appendChild(createHeader)
                letterDiv.appendChild(createDivs);
                createDivs.appendChild(createHeader);
                
            }
};


// run every time enter is clicked
    function userInputLetter() {
        let inputUser = document.getElementById('letter').value.toLowerCase() ; // id of the input
        console.log(inputUser);
        let makeItVisible = document.getElementsByClassName('show');
        console.log(makeItVisible);
               let indexOfTheLetter = chosenWord.indexOf(inputUser) // getting the index of the element instead manipl.the string(returns index)
                if (indexOfTheLetter >= 0){  // insted of a for loop checking only if it is in the array(index of it );
                    for ( let j= 0; j < makeItVisible.length; j++ ) {
                        if( chosenWord[j] === inputUser){
                              makeItVisible[j].style.visibility = "visible";
                        }
                  
                    }

                }else{
                    console.log('wrong')
                    let wrongWord = document.getElementById(`box${counter}`);  // get the text from the box 0-5 the wrong choice
                    wrongWord.innerText = "X";// this is the div that holds the x for wrong answer
                    console.log(inputUser);
                    document.querySelector('.showLetters').innerHTML += inputUser ;
                    counter++;
                }
    }




    function winOrLose () {
        
        let checkTheLetters = document.getElementsByClassName('show'); // h1 by class
        console.log(checkTheLetters + "show class");
        let ifItIsVisible = 0; //count correct guesses
        let theDiv =  document.querySelector(".showLetters").innerText;
        console.log(theDiv);
    
        for ( let i =0; i<checkTheLetters.length; i++){
            let x = checkTheLetters[i].style.visibility == "visible";

            if(x){
                  ifItIsVisible++; 

                  if(ifItIsVisible === checkTheLetters.length){ 
                        alert("You are the champion");
                        document.getElementById('win').style.visibility = "visible";
                        return;
                  }
            } else {
                // user puts in more than 5 letters (later on use length of word)
                let incorrect = theDiv.length ; // the length of the div that have all the wrong letters that the playedr gued
                console.log(incorrect);
                    if(incorrect === 5){ 
                        alert("You lose");
                        document.getElementById('lose').style.visibility = "visible";
                        for (i= 0;i<checkTheLetters.length;i++){
                            checkTheLetters[0].style.visibility = "visible";
                            checkTheLetters[1].style.visibility = "visible";
                            checkTheLetters[2].style.visibility = "visible";
                            checkTheLetters[3].style.visibility = "visible";
                            checkTheLetters[4].style.visibility = "visible";
                            checkTheLetters[5].style.visibility = "visible";
                            checkTheLetters[6].style.visibility = "visible";
                            checkTheLetters[7].style.visibility = "visible";                                                                      
                            console.log('check the lettres' + checkTheLetters);
                        
                        return;
                        }
                  }
 
            }
        }
    };
   
//    winOrLose()
    function clearInputField (){

        let clearInput = document.getElementById('letter').value = "";
        
    };
    
    