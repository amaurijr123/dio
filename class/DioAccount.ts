export abstract class DioAccount {

    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string =>{
        return this.name
    }

    getAccountNumber = (): number =>{
        return this.accountNumber
    }
    
    getBalance = (): number => {
        return this.balance
    }

    addBalance = (value: number): void => {
        this.balance += value 
    }

    cancelAccount = (): void =>{
        this.status = false
        console.log('Conta: '+ this.accountNumber + ' Cancelada')
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.addBalance(value)
            console.log(this.accountNumber + ' depositou ' + value)
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && this.balance > value){
            this.balance -= value
            console.log(this.accountNumber + ' sacou ' + value)
        }
    }

    validateStatus = (): boolean =>{
        if (this.status){
            return this.status
        }
        
        throw new Error('Conta inválida')
    }
}