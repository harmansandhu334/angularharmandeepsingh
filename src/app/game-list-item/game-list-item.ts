import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'game-list-item',
  imports: [],
  templateUrl: './game-list-item.html',
  standalone: true,
  styleUrl: './game-list-item.css'
})
export class GameListItem {
  @Input() game?: User;

}
