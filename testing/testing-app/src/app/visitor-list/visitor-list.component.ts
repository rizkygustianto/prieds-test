import { Component, OnInit } from '@angular/core';
import { Visitor } from '../models/Visitor'
import { VisitorService } from '../visitor.service'

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  visitors:Visitor[];

  constructor(private visitorService:VisitorService) { }

  ngOnInit(): void {
    this.visitorService.getVisitors().subscribe(visitors => {
      this.visitors = visitors
    })
  }

}
