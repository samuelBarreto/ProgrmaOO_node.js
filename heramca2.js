// cadeia de protótipos (prototype chain)

const avo ={ attr1: 'A'}
const Pai = { __proto__:avo, attr2: 'B'}
const filho= { __proto__:Pai, attr3: 'C'}
console.log(filho.attr1)