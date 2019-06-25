class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome , profisao = 'Professor') {
        super(sobrenome)
        this.profisao = profisao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)