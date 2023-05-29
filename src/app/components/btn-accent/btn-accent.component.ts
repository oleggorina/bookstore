import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-accent',
  templateUrl: './btn-accent.component.html',
  styleUrls: ['./btn-accent.component.scss']
})
export class BtnAccentComponent {
  @Input() btnText = 'Order Today';
}
