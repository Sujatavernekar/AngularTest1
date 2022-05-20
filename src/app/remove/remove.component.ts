import { Component, OnInit } from '@angular/core';
import { BankloanService } from '../bankloan.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(public ls:BankloanService) { }

  
  ngOnInit() {
  }

  delete(id){
  this.ls.removeLoan(id);
  }

}
