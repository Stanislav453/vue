let bigText       = document.querySelector("#big-text"),
    litleText     = document.querySelector("#litle-text"),
    preview       = document.querySelector(".preview"),
    previewSmall  = document.querySelector(".preview2"),
    catchUl       = document.querySelector("ul")


bigText.addEventListener("input", function(e) {

 let myBigText =  preview.textContent =  e.target.value; 
    console.log( e )

    if( e.data === 'e' ) {
    let createLi = document.createAttribute("li");
    }

});

litleText.addEventListener("input", function(e) {


    previewSmall.innerText = e.target.value; 

});

// document.body.addEventListener("keyup", function(e) {
//     console.log(e)
// })


