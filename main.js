//Select the img
const img = document.getElementsByClassName("img-container");
console.log(img);


//immagine attiva al momento
let ActiveImg = 0;

//Select tasto Next
const next = document.getElementById("next");
console.log(next);

//creo active al tasto next
next.addEventListener('click',
    function(){
        img[ActiveImg].classList.remove("active");
        img[ActiveImg].classList.add("inactive")
        console.log("ciao") }
)
