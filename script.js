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

    addBlock();

  }
});




// Block textu
function addBlock () {

  let catchUl = document.querySelector("ul");
  let fragment = document.createDocumentFragment();
  let article = fragment
    .appendChild(document.createElement("li"))
    .appendChild(document.createElement("article"));
  article.classList.add("dude");
  article.textContent = preview.textContent;

  let spanText = document.createElement("span");
  spanText.textContent = previewSmall.textContent;

  article.appendChild(spanText);
  catchUl.appendChild(fragment);
};