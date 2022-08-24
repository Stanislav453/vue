let bigText = document.querySelector("#big-text"),
  litleText = document.querySelector("#litle-text"),
  preview = document.querySelector(".preview"),
  previewSmall = document.querySelector(".preview2"),
  appBoddy = document.querySelector("#app"),
  divMiror = document.querySelector(".mirror");

  console.log( divMiror )

// appBoddy.addEventListener("keydown", function (e) {
//   console.log(e);
//   if ((e.data = "Enter")) {
//     console.log("Ahoj");
//   }
// });

bigText.addEventListener("input", function (bigText) {

  let myBigTextValue = bigText.target.value;

  preview.textContent = myBigTextValue;

});

litleText.addEventListener("input", function (e) {
  previewSmall.innerText = e.target.value;
});

// document.body.addEventListener("keyup", function(e) {
//     if( e.key === "Enter" ) {
      
//     let catchUl  = document.querySelector("ul")
//     let fragment = document.createDocumentFragment();
//     let li = fragment.appendChild(document.createElement("li"));
//     li.textContent = myBigTextValue;

//     catchUl.appendChild(fragment)
//     }
// })
