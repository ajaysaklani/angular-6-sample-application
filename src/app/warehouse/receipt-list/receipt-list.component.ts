import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from '../../products';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent,
    SelectableSettings
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {

    public mySelection: number[] = [2, 4];
    constructor(){
        //called first time before the ngOnInit()
     }
   
     ngOnInit(){
        //called after the constructor and called  after the first ngOnChanges() 
     }
    
    public state: State = {
        skip: 0,
        take: 10,

        // Initial filter descriptor
        filter: {
          logic: 'and',
          filters: [{ field: 'ProductName', operator: 'contains', value: '' }]
        }
    };

    public gridData: GridDataResult = process(sampleProducts, this.state);

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(sampleProducts, this.state);
    }

    public onSelectedKeysChange(e) {
        const len = this.mySelection.length;

    }
}
