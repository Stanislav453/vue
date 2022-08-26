var app = (function () {

  //General
  var catchUl = document.querySelector("ul");

    

  //Vytvorenie počítadla (input/number)
  var addVoice = function () {
     let voiceNumber =  document.createElement("input")
         voiceNumber.setAttribute("type", "number")
         voiceNumber.setAttribute("value", "0")
         voiceNumber.classList.add("ctrl");

         return {
            voiceNumber: voiceNumber
         }

  }

  
  // //Vytvorenie remove (input/number)
  // var addRemove = function () {
  //   let linkRemove =  document.createElement("a")
  //       linkRemove.classList.add("ctrl");
  //       linkRemove.textContent = "X";

  //       linkRemove.addEventListener("click", function() {
  //         addLi().appLi.remove()
  //         console.log( "ahoj" )
  //       })

  //       return {
  //          linkRemove: linkRemove
  //       }

//  }

     //Vytvorenie li
     var addLi = function () {
      var appLi =  document.createElement("li")
          catchUl.appendChild(appLi)
  
          // appLi.appendChild(addRemove().linkRemove)
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

      return {
        article: article
      }


  };



  // Vracanie funkcii
  return {

    addBlock: addBlock,

  }
    
}());