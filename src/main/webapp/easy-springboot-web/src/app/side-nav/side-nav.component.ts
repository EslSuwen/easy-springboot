import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  toggleFlag = true;
  userName = 'test user';

  onToggle() {
    this.toggleFlag = (this.toggleFlag !== true);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  logout() {
  }

}


