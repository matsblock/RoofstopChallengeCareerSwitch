fetch = require('node-fetch') //npm install node-fetch@2

async function check(blocks = [], token = '') {
    arrayOrdenado = Object.values(blocks);
    let response;
    for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
            res = await fetch("https://rooftop-career-switch.herokuapp.com/check?token=" + token, {
                method: 'POST',
                body: JSON.stringify({ "blocks": [arrayOrdenado[i], arrayOrdenado[j]] }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await res.json()
            if (response.message) {
                [arrayOrdenado[i + 1], arrayOrdenado[j]] = [arrayOrdenado[j], arrayOrdenado[i + 1]];
                break;
            }
        }
    }
    return arrayOrdenado;
}

async function checkSolutionWithApi(encoded, token) {
    res = await fetch("https://rooftop-career-switch.herokuapp.com/check?token=" + token, {
                method: 'POST',
                body: JSON.stringify({ "encoded": encoded }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await res.json()
            return response.message;
}

module.exports = {
    check,
    checkSolutionWithApi,
 }
