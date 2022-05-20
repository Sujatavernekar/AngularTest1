import { Component, OnInit } from '@angular/core';
import { BankloanService } from '../bankloan.service';
import { Data } from '../data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public ls:BankloanService) { }

  loanCustomers = [];
   interest=[]
   emi=[]
   cust=new Data(0,'',0,new Date(),0,0);

  ngOnInit() {
    this.loanCustomers=this.ls.getAllLoans();

  }

}
