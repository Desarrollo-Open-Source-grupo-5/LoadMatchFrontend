import { Component } from '@angular/core';
import {CorpRegister} from '../corp-register/corp-register';

@Component({
  imports: [
    CorpRegister
  ],
  selector: 'app-newcomer',
  styleUrl: './newcomer.css',
  templateUrl: './newcomer.html',
})
export class Newcomer {}
