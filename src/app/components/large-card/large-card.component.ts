import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent implements OnInit {

  @Input() photoCover: string = ''
  @Input() cardTitle: string = ''
  @Input() cardDate: string = ''
  @Input() cardDescription: string = ''
  @Input() Id: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
