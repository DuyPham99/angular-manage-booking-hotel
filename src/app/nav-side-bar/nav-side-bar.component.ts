import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  selected: string = "user-manage-page";
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(page: string){
    this.selected = page;
    this.pageSelected.emit(page);
  }

}
