import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../../../styles.scss']
})
export class NavbarComponent {

  toggle = false;

  ex_toggle_nav = () => {
    this.toggle=!this.toggle
  }

}
