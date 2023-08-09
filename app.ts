// diobanking

class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }


    deposit = () => {
        console.log('Voce depositou')
    }

    withdraw = () => {
        console.log('Voce sacou')
    }
}

const newAccount: Account = new Account('Jr',1)
console.log(newAccount)

const account: Account = new Account('Jhon', 2)
account.deposit()