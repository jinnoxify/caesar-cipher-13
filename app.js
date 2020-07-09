let span = document.querySelector(".encrypt");
let input = document.querySelector(".input-text");
let form = document.querySelector(".form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    span.textContent = rot13(input.value);
    backToDefault();
})
function backToDefault(){
    input.value = "";
}

function rot13(str) {

    let newStr = "";
    
    for (let i = 0; i<str.length; i++){
      let char = str.charCodeAt(i);
     
      if (char < 65 || char > 90) {
        char = char;
      } else {
        char += 13;
        if (char > 90) {
         char = (char - 90) + 64;
        }  
      }   newStr += String.fromCharCode(char);
    }
      return newStr;
    }

