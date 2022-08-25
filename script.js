let bigText = document.querySelector("#big-text"),
  litleText = document.querySelector("#litle-text"),
  preview = document.querySelector(".preview"),
  previewSmall = document.querySelector(".preview2"),
  appBoddy = document.querySelector("#app"),
  mirror   = document.querySelector( ".mirror" );


// appBoddy.addEventListener("keydown", function (e) {
//   console.log(e);
//   if ((e.data = "Enter")) {
//     console.log("Ahoj");
//   }
// });

bigText.addEventListener("input", function (e) {
  preview.textContent = e.target.value;

});

litleText.addEventListener("input", function (e) {
  previewSmall.textContent = e.target.value;
});

console.log( preview.innerText )

document.body.addEventListener("keyup", function(e) {
    if( e.key === "Enter" ) {

    
      
    let catchUl  = document.querySelector("ul")
    let fragment = document.createDocumentFragment();
    let article= fragment
            .appendChild(document.createElement("li"))
            .appendChild(document.createElement("article"))
      article.classList.add("dude")
    article.textContent = preview.textContent;

    let spanText = document.createElement("span")
    spanText.textContent = previewSmall.textContent

    article.appendChild(spanText)
    catchUl.appendChild(fragment)


    }
})

