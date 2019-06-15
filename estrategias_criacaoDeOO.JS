//USANDO  A NOTAÇÃO LITERAL
const obj1 ={}
console.log(obj1)

//OBJETO EM JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// FUNÇÃO CONSTRUTORES
function Pessoal (nome , sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
    this.getPessolMudarOIdade =() => {
        return idade * (idade +1)
    }
}
const p1 = new Pessoal('Samuel','Oliveira', 20)
const p2 = new Pessoal('Manoel','Santo', 30)

console.log(p1.getPessolMudarOIdade(),p2.getPessolMudarOIdade())

//DUNÇÃO FACTOY
function criarFuncionario (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30 -faltas)
        }
    }
}

const f1 = criarFuncionario('Samuel', 7980,4)
const f2 = criarFuncionario('Ana', 11980, 10)
console.log(f1.getSalario(), f2.getSalario())

//Objeto.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função faosa que retorna um objeto pela o json e fazelo em objeto
const fromJSON = JSON.parse('{"Info":"Sou um Json"}')
console.log(fromJSON.Info)