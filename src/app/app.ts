import { Component, signal } from '@angular/core';

import { User } from '../app/models/user';
import { NgIf, NgFor } from '@angular/common';
import {GameList} from './game-list/game-list';
import { mockContent } from './data/mockcontent';
import { GameListItem } from './game-list-item/game-list-item';
import { Game } from './services/game';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [    RouterOutlet, RouterLink],
  templateUrl:'./app.html',
  standalone: true,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angularharmandeepsingh');




// single game will appear at top
  oneGame?: User;

  //  Dependency Injection
  constructor(private game: Game) {
    // getting the  one game  by using service
    this.game.getGameWithId(2).subscribe(g => {
      this.oneGame = g;
    });
  }


}
