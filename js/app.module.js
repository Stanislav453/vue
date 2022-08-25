var app = (function () {



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

  return {

    addBlock: addBlock

  }
    
}());