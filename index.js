
const text = "Electrical And Electronic Engineering";
const typespped  = 100 ;
let i = 0 ;


function typing(){
    if (i < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, typespped);
    }
    
}

typing();



// for btn
function selecting_year(){
    const selecting1 = document.getElementById("select_year")
selecting1.addEventListener("click", function() {
    // Change the location to the target HTML file
    window.location.href = "1st_year.html";
});
}
selecting_year();



function selecting_year1(){
    const selecting11 = document.getElementById("select_year1")
selecting11.addEventListener("click", function() {
    // Change the location to the target HTML file
    window.location.href = "1st_year.html";
});
}
selecting_year1();


