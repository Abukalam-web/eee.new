
const text = "Electrical And Electronic Engineering";
const typespped  = 200 ;
let i = 0 ;

function typing(){
    if (i < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, typespped);
    }
    
}

typing();