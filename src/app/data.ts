export class Data {
    constructor(
        public loanId:number,
        public loanCustomerName:string,
        public loanAmount:number,
        public dateOfLoan:Date,
        public tenure:number,
        public rateOfInterest:number)
        {}
    
        computeInterestAmount(){
            //Interest= laon amount * rate of interest* tenure (number of months)
            let interest=this.loanAmount*(this.rateOfInterest/100)*this.tenure;
            return interest;
        }
    
        computeEMI(){
            //EMI=[P*(R/100)*{1+(R/100)}^N]/[{1+(R/100)}^(N-1)]
            //P= Loan amount
            //R= rate of interest
            //N= tenure (number of months)
            let emi:number;
            let r=this.rateOfInterest/100;
            let numerator=[this.loanAmount*(r)*(1+r)^this.tenure];
            let denominator=[(1+r)^(this.tenure-1)];
             emi=Number(numerator)/Number(denominator);
            return emi;
        }
    
}
