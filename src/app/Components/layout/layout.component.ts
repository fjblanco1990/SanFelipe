import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('inputMessage')
  inputMessageRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


 
}
