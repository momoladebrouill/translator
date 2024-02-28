document.getElementById('button').addEventListener('click', function() {
    let value = document.getElementById('input').value;
    let translated = ckoalafonction(value)
    document.getElementById('output').innerText = translated;
})

//generé pas copilot
function ckoalafonction(value) {
    let translated = '';
    for (let i = 0; i < value.length; i++) {
        if (value[i] === 'a' || value[i] === 'A') {
            translated += 'akoala';
        } else {
            translated += value[i];
        }
    }
    return translated;
}
