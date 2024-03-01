
let b = [];
!async function() {
let  req = await fetch('./data2.json')
    .then((response) => response.json())
    .then((data) => {return data;})
    .catch(error => {
        console.error(error);
    });
    b = req;
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
    // do a callback to get data from request
    let data = b;
    for (let i = 0; i < value.length; i++) {
        done = false;
        for(let j = 0; j < data.length; j++){
            let elem = data[j];
            if (value[i].toUpperCase() === elem['nom'][0]) {
                translated += elem['grek'];
                done = true;
            }
        }
        if(done == false){
            translated += value[i];
        }
    }
    return translated;
}
