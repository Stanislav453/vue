// General
let bigText      = document.querySelector("#big-text"),
    litleText    = document.querySelector("#litle-text"),
    preview      = document.querySelector(".preview"),
    previewSmall = document.querySelector(".preview2"),
    appBoddy     = document.querySelector("#app"),
    mirror       = document.querySelector(".mirror");

//Zrkadlenie textu s inputu bigtext/litleText
bigText.addEventListener("input", (e) => preview.textContent = e.target.value);

litleText.addEventListener("input", (e) => previewSmall.textContent = e.target.value);


//pridávanie odstavcov
document.body.addEventListener("keyup", function (e) {

  if (e.key === "Enter") {

    app.addLi();

  }
});