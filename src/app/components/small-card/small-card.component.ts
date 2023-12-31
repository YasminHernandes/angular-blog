import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input() photoCover: string = ''
  @Input() cardTitle: string = ''
  @Input() cardDate: string = ''
  @Input() Id: string = String(Math.random())

  constructor() { }

  ngOnInit(): void {
  }

}
