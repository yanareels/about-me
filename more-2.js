// читать далее
function myFunctionTwo() {
    let dotsTwo = document.getElementById("dotsTwo");
    let moreTextTwo = document.getElementById("moreTwo");
    let btnTextTwo = document.getElementById("myBtnTwo");
  
    if (dotsTwo.style.display === "none") {
      dotsTwo.style.display = "inline";
      btnTextTwo.innerHTML = "Читать больше"; 
      moreTextTwo.style.display = "none";
    } else {
      dotsTwo.style.display = "none";
      btnTextTwo.innerHTML = "Скрыть текст"; 
      moreTextTwo.style.display = "inline";
    }
  }
