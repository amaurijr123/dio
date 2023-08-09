// diobanking
import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'

const newPeople: PeopleAccount = new PeopleAccount('Jr', 1, 123)
newPeople.deposit(30)
newPeople.getBalance()
newPeople.withdraw(10)
newPeople.getBalance()

// const companyAccount: CompanyAccount = new CompanyAccount('teste', 2)
// companyAccount.deposit()