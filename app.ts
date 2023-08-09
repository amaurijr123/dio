// diobanking
import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'
import {StrangeAccount} from './class/StrangeAccount'

const people: PeopleAccount = new PeopleAccount('Jun', 1, 1)
const company: CompanyAccount = new CompanyAccount('Dio', 2)
const strange: StrangeAccount = new StrangeAccount('Stephen', 3)

people.deposit(100)
company.getLoan(130)
strange.deposit(200)


console.log('Saldo de ' + strange.getAccountNumber() +' : '+ strange.getBalance())
people.withdraw(20)
console.log('Saldo de '+ people.getAccountNumber() + ' : ' + people.getBalance())
console.log('Saldo de '+ company.getAccountNumber() + ' : ' + company.getBalance())

console.log(people.getName())
console.log(company.getName())
console.log(strange.getName())

people.cancelAccount()
company.cancelAccount()
strange.cancelAccount()