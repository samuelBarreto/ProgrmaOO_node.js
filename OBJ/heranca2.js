// cadeia de protótipos (prototype chain)

const avo ={ attr1: 'A'}
const Pai = { __proto__:avo, attr2: 'B'}
const filho= { __proto__:Pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr1, filho.attr2, filho.attr3)

const Carro= {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta){
        if (this.velAtual + delta <= this.velMax){
        this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }

    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //SHADOWING
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, Carro)
Object.setPrototypeOf(volvo, Carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())