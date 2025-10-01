import { Component, signal } from '@angular/core';

import { User } from './models/user';
import { NgIf, NgFor } from '@angular/common';
import {GameList} from './game-list/game-list';

@Component({
  selector: 'app-root',
  imports: [ NgIf, NgFor, GameList],
  templateUrl:'./app.html',
  standalone: true,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angularharmandeepsingh');





  gamesList: User[] = [
    { id: 1, title: 'Cricket 24',     genre: 'Sports',      inStock: true,  multiplayer: true  },
    { id: 2, title: 'Ashes Cricket',  genre: 'Sports',      inStock: false, multiplayer: true  },
    { id: 3, title: 'Kabaddi Clash',  genre: 'Sports',      inStock: true,  multiplayer: true  },
    { id: 4, title: 'Carrom Board',   genre: 'Indoor',      inStock: true,  multiplayer: true  },
    { id: 5, title: 'Ludo King',      genre: 'Casual',      inStock: true,  multiplayer: true  },
    { id: 6, title: 'Gilli Danda',    genre: 'Traditional', inStock: true,  multiplayer: false },
    { id: 7, title: 'Kho Kho Run',    genre: 'Sports',      inStock: true,  multiplayer: true  },
    { id: 8, title: 'Snakes & Ladders', genre: 'Board',     inStock: true,  multiplayer: true  }
  ];


}
