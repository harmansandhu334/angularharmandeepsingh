import { Component } from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { GameListItem } from '../game-list-item/game-list-item';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, GameListItem],
  templateUrl: './game-list.html',
  standalone: true,
  styleUrl: './game-list.css'
})
export class GameList {
  gamesList: User[] = [];

}
