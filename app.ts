interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Eu',
    idade: 23
}

const pessoa2: Pessoa = {
    nome: 'Teste',
    idade: 24,
    profissao: 'Dev'
}

const arrayteste: Pessoa[] = [
    pessoa,
    pessoa2
]