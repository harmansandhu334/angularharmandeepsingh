import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import {NgIf} from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'game-list-item',
  imports: [NgIf,NgOptimizedImage],
  templateUrl: './game-list-item.html',
  standalone: true,
  styleUrls: ['./game-list-item.css']
})
export class GameListItem {
  @Input() game?: User;

}
