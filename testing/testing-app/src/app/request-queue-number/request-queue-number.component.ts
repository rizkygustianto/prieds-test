import { Component, OnInit } from '@angular/core';
import { Visitor } from '../models/Visitor';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {

  lastVisitor:Visitor;
  barcode:string;

  constructor(private visitorService:VisitorService) { }

  ngOnInit(): void {
    this.visitorService.getLastVisitor().subscribe(visitor => {
      this.lastVisitor = visitor
      console.log(this.lastVisitor);
      this.barcode = this.getBarcodeData()
      console.log(this.barcode);
    })
    
  }

  getBarcodeData() {
    let barcode = ''
    barcode += this.lastVisitor[0].id
    barcode += ' '
    barcode += this.lastVisitor[0].name
    return barcode
  }

}
