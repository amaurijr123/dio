// diobanking
import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'

const newPeople: PeopleAccount = new PeopleAccount('Jr', 1, 123)
console.log(newPeople)

const companyAccount: CompanyAccount = new CompanyAccount('teste', 2)
console.log(companyAccount)