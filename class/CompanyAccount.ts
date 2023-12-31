import {DioAccount} from './DioAccount'

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name,accountNumber)
    }

    getLoan = (value: number): void => {
        if(this.validateStatus()){
            this.addBalance(value)
            const account = this.getAccountNumber()
            console.log(account + ' pegou um emprestimo de ' + value)
        }
    }
}