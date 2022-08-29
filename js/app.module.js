var app = (function () {

  //General
  var catchUl = document.querySelector("ul");


  // Create article
  var createBlock = function() {

    let fragment = document.createDocumentFragment();
    let article = fragment
      .appendChild(document.createElement("article"));
      article.classList.add("dude");
      article.textContent = preview.textContent;
  

    let spanText = document.createElement("span");
    spanText.textContent = previewSmall.textContent;

    article.appendChild(spanText);

    return {
      article: article

    }
  }

    

  // Vytvorenie počítadla (input/number)
  var addVoice = function () {
     let voiceNumber =  document.createElement("input")
         voiceNumber.setAttribute("type", "number")
         voiceNumber.setAttribute("value", "0")
         voiceNumber.classList.add("ctrl");

         voiceNumber.addEventListener("input", function(e) {
         createBlock().article.classList.toggle("gold", +e.target.value > 2)
        
        })

         return {
            voiceNumber: voiceNumber
         }

  }

     //Vytvorenie li
     var addLi = function () {
      var appLi =  document.createElement("li")
          catchUl.appendChild(appLi);

          let linkRemove =  document.createElement("a")
          linkRemove.classList.add("ctrl");
          linkRemove.textContent = "X";
  

          appLi.appendChild(linkRemove)
          appLi.appendChild(createBlock().article)
          appLi.appendChild(addVoice().voiceNumber)

          

          linkRemove.addEventListener("click", function(e) {
            e.preventDefault();

            this.nextElementSibling.nextSibling.remove();
            this.nextElementSibling.remove();
            this.remove();
        });


          return {
            appLi: appLi
          }

    };




  // Vracanie funkcii
  return {

    addLi: addLi

  }
    
}());




