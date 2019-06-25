const obj = { a: 1, b:2, c:3, soma (){return a + b + c}}
console.log(JSON.stringify(obj))// mostra um json


console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))// fazendo um json
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e":[] }'))

