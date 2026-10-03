import {Component, signal} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';

@Component({
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon
  ],
  selector: 'app-corp-register',
  styleUrl: './corp-register.css',
  templateUrl: './corp-register.html',
})
export class CorpRegister {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
