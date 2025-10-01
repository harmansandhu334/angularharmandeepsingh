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
  gamesList: User[] = [
    { id: 1, title: 'Cricket 24',     genre: 'Sports',      inStock: true,  multiplayer: true  },
    { id: 2, title: 'Ashes Cricket',  genre: 'Sports',      inStock: false, multiplayer: true  },
    { id: 3, title: 'Kabaddi Clash',  genre: 'Sports',      inStock: true,  multiplayer: true  },
    { id: 4, title: 'Carrom Board',   genre: 'Indoor',      inStock: true,  multiplayer: true  }

  ];

}
