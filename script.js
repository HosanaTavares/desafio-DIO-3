let tipoHeroi = {
    mago:{
        categoria: "Mago",
        ataque:"Magia"
    },

    guerreiro:{
        categoria: "Guerreiro",
        ataque:"Espada"
    },

    ninja:{
        categoria: "Ninja",
        ataque:"Shuriken"
    },

    monge:{
        categoria:"Monge",
        ataque:"Artes marciais"
    }

}


class heroi{
    constructor(nome, idade, tipo) {
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
    }
    ataque() {
        
        let retorno = `O ${this.tipo.categoria} atacou usando ${this.tipo.ataque} `
            console.log(retorno)
            
        }
}


let heroi1 = new heroi("Star Gatuno", 30 , tipoHeroi.mago)
heroi1.ataque()



 





