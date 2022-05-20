import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankloanService {

  constructor() { }

  loanCustomers=[]

  addLoan(customer) {
    this.loanCustomers.push(customer)
    console.log(this.loanCustomers)
}
getAllLoans() {
    return this.loanCustomers;
}

removeLoan(loanId) {
    for (let i = 0; i < this.loanCustomers.length; i++) {
        if (this.loanCustomers[i].loanId == loanId) {
          this.loanCustomers.splice(i, 1);
        }
    }
}

}
