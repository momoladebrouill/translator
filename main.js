
let lignes = [];
!async function() {
let  req = await fetch('./data2.json')
    .then((response) => response.json())
    .then((data) => {return data;})
    .catch(error => {
        console.error(error);
    });
    lignes = req;
}();
// Get the input field
var input = document.getElementById("input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("translate").click();
  }
});
// toma b part
document.getElementById('translate').addEventListener('click', function() {
    let value = document.getElementById('input').value;
    let translated = ckoalafonction(value)
    document.getElementById('output').innerText = translated;
    document.getElementById('rendu').style.display = 'block';
})

//generé pas copilot
function ckoalafonction(value) {
    let translated = '';
    let dest = document.getElementById('destination-selector').value;
    for (let i = 0; i < value.length; i++) {
        done = false;
        for(let j = 0; j < lignes.length; j++){
            let tr = lignes[j];
            if (value[i].toUpperCase() === tr['nom'][0]) {
                translated += tr[dest];
                done = true;
            }
        }
        if(done == false){
            translated += value[i];
        }
    }
    return translated;
}
function coppyy() {
  // Get the text field
  var copyText = document.getElementById("output");
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  // Alert the copied text
  alert("Copied the text: " + copyText.innerText);
}
