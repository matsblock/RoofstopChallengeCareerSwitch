require("dotenv").config(); //npm install dotenv --save
jsonData = require('./data.json')
const data = jsonData.data;
const { check, checkSolutionWithApi } = require('./solution.js');

it('Debe verificarse la solucion correcta con la API', async () => {
    let arrayOrdenado = await check(data, process.env.TOKEN)
    arrayOrdenado_AsString = arrayOrdenado.toString()
    encoded = arrayOrdenado_AsString.split(",").join("")
    expect(await checkSolutionWithApi(encoded, process.env.TOKEN))
    .toEqual(true);
}, 30000);

//      Solucion correcta para matsblock@outlook.com:
//     const arrayOrdenado = [
//     "oQcQjDjxKht0hrwrmV96jj7v0gWafQavX8ngrGJOi20wURiIFbqXr0Y3V4wRQA1g2BSYG9eFBjZdGXLqeauNO4tP6aO4NhdKs0bO",
//     "1teZAG2OTKpPwePnu3F5YWDIIMEi1o9FHkBAiy0PFPdi4Gr2J15NHO2lmgwbdDUcoGymHN3m2ann7eDpWaJvLENN9PXCVkz6SAmp",
//     "lyevTL8kAR5HNtOiSEoi1FJbsQJeip96JoZHCawrhfxtlJ6m1rpQ3578jHeghOBdEW1bewtmKNFLvNL86XxMH2RJhVu4ur50AFwj",
//     "zqEOxCEI0tSdRquGQJzHp9fJjUQHWHWDSje0Gnc0M3zECTlbB9zn4JZ6so3RymVyHke5PmG5FSmL7QMVQKEsUtiFB9zzZRBornbS",
//     "VV1Kes1rPJ3VdzqwcDNUjX5z7PbLWWNNSghoSAUQhWcCtL0XNR0JVxbn31QRxXqrkqBiYDViPIoKDHhTvmIDcbAmB6XfucK99rzP",
//     "XpXd5zs5s0dJ4DcC4dxKM2sije80ajGtedJEvudCWGAkmMZy4DH0kBEI5bfUDVTPIfv8BBQs1vlYOoRjypQNNqgKq7KkK27Cjcza",
//     "3ZYUIIFCfIVXB34FXre68ygj0MfOpfOmgVlZ6qhY384AK0A5e9DxlmW6BMXYJFBykRtlJXN1og845Ke7LHjLgMurG4Tpktkr60p6",
//     "yRs4enEFFlALfBUD1m7e4W8Cq4OEq4dyNnoA90u90BBcgByfiqtLaCGe1LkiQ7VcLF5WElFt7l8UIO0JaY6tnYgMFFfoXnyYDF4X",
//     "Z8VtdHbjfEr5lxyWCyYQT0j43AYpqgCl3eU7Dlc6D2WL0fqaaYhh6BEKbozMotNkfBkRml2TmxQxtVUkZLUwizAee0OhsxdJZjic"]

