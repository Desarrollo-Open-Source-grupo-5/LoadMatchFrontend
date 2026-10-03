import {Component, signal} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from '@angular/material/button';

@Component({
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatIconButton
  ],
  selector: 'app-transp-register',
  styleUrl: './transp-register.css',
  templateUrl: './transp-register.html',
})
export class TranspRegister {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
