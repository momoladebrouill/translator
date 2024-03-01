
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

// toma b part
document.getElementById('button').addEventListener('click', function() {
    let value = document.getElementById('input').value;
    let translated = ckoalafonction(value)
    document.getElementById('output').innerText = translated;
})

//generé pas copilot
function ckoalafonction(value) {
    let translated = '';
    for (let i = 0; i < value.length; i++) {
        done = false;
        for(let j = 0; j < lignes.length; j++){
            let tr = lignes[j];
            if (value[i].toUpperCase() === tr['nom'][0]) {
                translated += tr['grek'];
                done = true;
            }
        }
        if(done == false){
            translated += value[i];
        }
    }
    return translated;
}
