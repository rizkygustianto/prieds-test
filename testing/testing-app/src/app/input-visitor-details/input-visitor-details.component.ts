import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  
  visitorName:string;
  visitorPhone:string;

  constructor(private visitorService:VisitorService, private router:Router) { }


  ngOnInit(): void {
  }

  onClickSubmit(data) {
    const visitor = {
      name: data.inputName,
      phone_number: data.inputPhone
    }
    this.visitorService.addVisitor(visitor).subscribe(added => {
      console.log(added);
      this.router.navigate(['/'])
    })
  }
}
