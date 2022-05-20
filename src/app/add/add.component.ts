import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankloanService } from '../bankloan.service';
import {Data} from '../data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public rb:BankloanService) { }

 
  ngOnInit() {
      }
    
    
      public customerForm=new FormGroup({
        loanId:new FormControl(),
        customerName:new FormControl(),
        loanAmount:new FormControl(0),
        dateOfLoan:new FormControl(new Date()),
        tenure:new FormControl(0),
        rateOfInterest:new FormControl(0)
      });
    
      add(){
        console.log(this.customerForm.value)
        this.rb.addLoan(this.customerForm.value);
      }
    }
