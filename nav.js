function navBar (){
const openBtn = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
openBtn.addEventListener("click", function(){
    const navBox = document.getElementById("navBox");
    const closeBtn = document.getElementById("close-icon");
    navBox.style.display = "block";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";

})
closeIcon.addEventListener("click", function(){
    const navBox = document.getElementById("navBox");
    const closeBtn = document.getElementById("close-icon");
    navBox.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
})

}
navBar();
