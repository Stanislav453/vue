var app = (function () {

  //General
  var catchUl = document.querySelector("ul");


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
          createBlock().article.classList.toggle("gold", e.target.value > 2)
        })

         return {
            voiceNumber: voiceNumber
         }

  }


     //Vytvorenie li
     var addLi = function () {
      var appLi =  document.createElement("li")
          catchUl.appendChild(appLi)

          appLi.appendChild(createBlock().article)
          appLi.appendChild(addVoice().voiceNumber)
  
        
      
    };




  // Vracanie funkcii
  return {

    addLi: addLi

  }
    
}());




  
//   //Vytvorenie remove (input/number)
//   var addRemove = function () {
//     let linkRemove =  document.createElement("a")
//         linkRemove.classList.add("ctrl");
//         linkRemove.textContent = "X";

//         linkRemove.addEventListener("click", function() {
//           addLi().appLi.remove()
//           console.log( "ahoj" )
//         })

//         return {
//            linkRemove: linkRemove
//         }

//  }