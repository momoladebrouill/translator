
let b = [];

var req = fetch('./data2.json')
    .then((response) => response.json())
    .then((data) => data)
// get data from request
let data = req;
console.log(data);

// toma b part
document.getElementById('button').addEventListener('click', function() {
    let value = document.getElementById('input').value;
    let translated = ckoalafonction(value)
    document.getElementById('output').innerText = translated;
})

//generé pas copilot
function ckoalafonction(value) {
    let translated = '';
    console.log(value);
    let data = req;
    for (let i = 0; i < value.length; i++) {
        for(elem in data){
            console.log("elem");
            console.log(elem);
            done = false;
            if (value[i] === elem['nom'][0]|| value[i] === 'A') {
                translated += elem['nom'];
                done = true;
            }
            if(done == false){
                translated += value[i];
            }
        }
    }
    return translated;
}
