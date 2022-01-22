import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rek',
  templateUrl: './rek.component.html',
  styleUrls: ['./rek.component.scss']
})
export class RekComponent implements OnInit {
  selected = 'option1';
  constructor() { }

  ngOnInit(): void {
  }

}
