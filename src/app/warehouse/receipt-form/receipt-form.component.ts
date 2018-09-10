import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent implements OnInit {

  public activeTab: number = 1;
  public ReceiptSummary: any = {};
  public formUpdated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ReceiptChanged() {
    this.formUpdated = true;
  }

  cancelChanges() {
    this.formUpdated = false;
  }

  SubmitReceipt(form){
    console.log(form, this.ReceiptSummary);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

}
