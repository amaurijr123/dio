import { DioAccount } from "./DioAccount";

export class StrangeAccount extends DioAccount{
    
    constructor(name: string, accountNumber: number){
        super(name,accountNumber)
    }

    deposit = (value: number): void =>{
        if(this.validateStatus()){
            value+=10
            this.addBalance(value)
            const account = this.getAccountNumber()
            console.log(account + ' depositou ' + value)
        }
    }
}