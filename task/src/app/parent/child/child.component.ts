import { Component,Input,ChangeDetectionStrategy, OnInit  } from '@angular/core';
import { GlobalService } from '../../service/global.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GlobalService] 
})
export class ChildComponent implements OnInit{
  @Input() data!:{value:any}
  childData: number = 1;
  constructor(public globalService:GlobalService){

  }
  ngOnInit(): void {
    
  }

  updateChildData() {
    this.childData++;
  }

  //Note
  //When we pass data from parent component to child that time we use OnPush change detection that only change value that get from parent when the @Input reference changes or an event originates within the component. 
  //When use use global service in child component with component metadata providers that time service work as independent for child component.

}
