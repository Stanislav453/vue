var app = (function () {

  var catchUl = document.querySelector("ul");


//Vytvorenie li
var addLi = function () {
    var appLi =  document.createElement("li")
        catchUl.appendChild(appLi)
        
        return {
          appLi: appLi
        }
      };
    

//Vytvorenie počítadla (input/number)

var addVoice = function () {
     let voiceNumber =  document.createElement("input")
         voiceNumber.setAttribute("type", "number")
         voiceNumber.classList.add("ctrl")

         return {
            voiceNumber: voiceNumber
         }
}


// Block textu
function addBlock () {

    addLi();

    let fragment = document.createDocumentFragment();
    let article = fragment
      .appendChild(document.createElement("article"));
    article.classList.add("dude");
    article.textContent = preview.textContent;

    addLi().appLi.appendChild(article)
      
  
    let spanText = document.createElement("span");
    spanText.textContent = previewSmall.textContent;

  
    article.appendChild(spanText);
    catchUl.appendChild(fragment);
  };

  return {

    addBlock: addBlock

  }
    
}());