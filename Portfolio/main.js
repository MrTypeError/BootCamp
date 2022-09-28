const dyanamicContent = document.getElementById("dyanamic-text");
console.log(dyanamicContent)

const phrases = ["Software Engineer..." , "Developer..." , ""]
let phraseIndex = 0;
let letterIndex  = 0;
const typingSpeed = 1

function printLatter(phrase) {
    if (letterIndex ==phrase.length){
        // clear letter which have been typed.
        clearLetter();
    }
    else if(letterIndex < phrase.length){
        dyanamicContent.textContent = phrase.charAt(letterIndex);
        letterIndex += 1;
        // setTimeout(// function reference , delay milisecond) 
        setTimeout(function(){
            printLatter(phrase)
    
        } , 300)
    }
}
function clearLetter() {
    if(letterIndex = -1){
        phraseIndex = (phraseIndex+1)% phrases.length;
        letterIndex = 0;
        printLatter(phrases[phraseIndex])
    }
    if(letterIndex > -1){
        let updatedPhrase  = "";
        for(let index=  0; index< letterIndex; index++)
        updatedPhrase+= phrases[phraseIndex].charAt(index);
    }
    console.log(updatedPhrase);
    dyanamicContent.textContent = updatedPhrase;
    letterIndex-=1;
    setTimeout(clearLetter, 100)
    
}

printLatter(phrases[phraseIndex])