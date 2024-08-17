import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{
  primitiveData: number = 1;
  nonPrimitiveData: { value: number } = { value: 1 };

  constructor(public globalService:GlobalService){

  }
  ngOnInit(): void {
   
  }

   updatePrimitiveData() {
    this.primitiveData++;
  }

  updateNonPrimitiveData() {
    this.nonPrimitiveData.value++;
  }

  //Note 
  //Here we use primitive data and non-primitive data in parent component.
  //We use default change detection in parent component.
  //We pass non-primitive data in child component.

}
