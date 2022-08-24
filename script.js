let bigText = document.querySelector("#big-text"),
  litleText = document.querySelector("#litle-text"),
  preview = document.querySelector(".preview"),
  previewSmall = document.querySelector(".preview2"),
  appBoddy = document.querySelector("#app");

appBoddy.addEventListener("keydown", function (e) {
  console.log(e);
  if ((e.data = "Enter")) {
    console.log("Ahoj");
  }
});

// bigText.addEventListener("keyup", function (e) {

//   var myBigText = (preview.textContent = e.target.value);

// });

// litleText.addEventListener("input", function (e) {
//   previewSmall.innerText = e.target.value;
// });

// document.body.addEventListener("keyup", function(e) {
//     if( e.key === "Enter" ) {
//       console.log("Ahoj")
//     }

//     let catchUl  = document.querySelector("ul")
//     let fragment = document.createDocumentFragment();
//     let li = fragment.appendChild(document.createElement("li"));
//     li.textContent = e.target.value;
// })
