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

// document.body.addEventListener("keyup", function(e) {
//     if( e.key === "Enter" ) {
      
//     let catchUl  = document.querySelector("ul")
//     let fragment = document.createDocumentFragment();
//     let li = fragment.appendChild(document.createElement("span"));
//     li.textContent = e.target.value;

//     catchUl.appendChild(fragment)
//     }
// })



// divMiror.addEventListener("keyup", function(e) {
//   console.log( e.target.value )
// })

