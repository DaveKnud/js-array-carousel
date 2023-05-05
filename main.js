//Select the img
const img = document.getElementsByClassName("img-container");
console.log(img);


//immagine attiva al momento
let ActiveImg = 0;

//Select tasto Next
const next = document.getElementById("next");
console.log(next);

//select tasto previous
const previous = document.getElementById("previous");
console.log(previous);


//creo active al tasto next
next.addEventListener('click',
    function(){

        if(ActiveImg < (img.length - 1)) {

            img[ActiveImg].classList.remove("active");
            img[ActiveImg].classList.add("inactive");
            console.log("ciao");
    
            //Cambia immagine passare a imm successiva
            ActiveImg = ActiveImg + 1;
    
            //immagini successive cosa fa
            img[ActiveImg].classList.remove("inactive");
            img[ActiveImg].classList.add("active");
        }
    }
)

previous.addEventListener('click',
    function(){
        if(ActiveImg > (img.length = 0)) {

            img[ActiveImg].classList.remove("active");
            img[ActiveImg].classList.add("inactive");
            console.log("ciao");

            //Cambia immagine passare a imm successiva
            ActiveImg = ActiveImg - 1;

            //immagini successive cosa fa
            img[ActiveImg].classList.remove("inactive");
            img[ActiveImg].classList.add("active");
        }
    }
)

next.addEventListener('click',
    function(){
        if(ActiveImg == (img.length - 1)) {


            img[ActiveImg].classList.remove("active");
            img[ActiveImg].classList.add("inactive");
            console.log("ciao");

            //Cambia immagine passare a imm successiva
            ActiveImg = 0;
            

            //immagini successive cosa fa
            img[ActiveImg].classList.remove("inactive");
            img[ActiveImg].classList.add("active");
        }
    }
)

previous.addEventListener('click',
    function(){
        if(ActiveImg == (img.length = 0)) {


            img[ActiveImg].classList.remove("active");
            img[ActiveImg].classList.add("inactive");
            console.log("ciao");

            //Cambia immagine passare a imm successiva
            ActiveImg = 4;
            

            //immagini successive cosa fa
            img[ActiveImg].classList.remove("inactive");
            img[ActiveImg].classList.add("active");
        }
    }
)



