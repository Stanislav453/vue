var app = (function () {

  //General
  var catchUl = document.querySelector("ul");

    

  //Vytvorenie počítadla (input/number)
  var addVoice = function () {
     let voiceNumber =  document.createElement("input")
         voiceNumber.setAttribute("type", "number")
         voiceNumber.classList.add("ctrl")
         voiceNumber.value = 0

        //  if( voiceNumber >= 15 ) {

        //  }

         return {
            voiceNumber: voiceNumber
         }
  }

  //Vytvorenie li
  var addLi = function () {
    var appLi =  document.createElement("li")
        catchUl.appendChild(appLi)

        appLi.appendChild(addVoice().voiceNumber)
      
      
        return {
        appLi: appLi

        }
  };


  // Block textu
  function addBlock () {

      let fragment = document.createDocumentFragment();
      let article = fragment
        .appendChild(document.createElement("article"));
        article.classList.add("dude");
        article.textContent = preview.textContent;

      addLi().appLi.appendChild(article)
      
  
      let spanText = document.createElement("span");
      spanText.textContent = previewSmall.textContent;

      article.appendChild(spanText);

  };

  // Vracanie funkcii
  return {

    addBlock: addBlock

  }
    
}());