import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {
  isActive: boolean = false;
  isActiveMenu: boolean = false;

  activeBurger(): void {
    this.isActive = !this.isActive;
  }

  activeMenu(): void {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
