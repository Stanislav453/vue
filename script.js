let bigText       = document.querySelector("#big-text"),
    litleText     = document.querySelector("#litle-text"),
    preview       = document.querySelector(".preview"),
    previewSmall  = document.querySelector(".preview2");

    console.log( previewSmall )


bigText.addEventListener("input", function(e) {
    e.preventDefault();

    preview.textContent =  e.target.value 

});

litleText.addEventListener("input", function(e) {
    e.preventDefault();

    // previewSmall.textContent =  e.target.value 
    previewSmall.innerText = e.target.value 

});


