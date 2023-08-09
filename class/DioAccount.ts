export abstract class DioAccount {

    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void =>{
        this.name = name
        console.log('Nome alterado com sucesso!')
    }
    
    getName = (): string =>{
        return this.name
    }

    getAccountNumber = (): number =>{
        return this.accountNumber
    }
    
    getBalance = (): void => {
        console.log(this.balance)
    }

    cancelAccount = (): void =>{
        this.status = false
        console.log('Conta: '+ this.accountNumber + ' Cancelada')
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value
            console.log('Voce depositou ' + value)
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus()){
            this.balance -= value
            console.log('Voce sacou ' + value)
        }
    }

    private validateStatus = (): boolean =>{
        if (this.status){
            return this.status
        }
        
        throw new Error('Conta inválida')
    }
}