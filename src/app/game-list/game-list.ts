import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLink } from '@angular/router';

import { User } from '../models/user';
import { GameListItem } from '../game-list-item/game-list-item';
import { Game } from '../services/game';
import { HoverHighlightDirective } from '../directives/hover-highlight';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-game-list',
  standalone: true,
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.css'],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    GameListItem,
    HoverHighlightDirective,


    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class GameList implements OnInit {
  gamesList: User[] = [];
  error: string | null = null;

  constructor(
    private game: Game,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.game.getGames().subscribe({
      next: (data: User[]) => {
        this.gamesList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching games';
        console.error('Error fetching games', err);
      },
      complete: () => console.log('Game data fetch complete!')
    });
  }

  selectedGame?: User;

  selectGame(game: User): void {
    this.selectedGame = game;
  }

  delete(id: number): void {
    this.game.deleteGame(id).subscribe(() => {
      this.gamesList = this.gamesList.filter(g => g.id !== id);
    });
  }

  edit(id: number): void {
    this.router.navigate(['/games', id, 'edit']);
  }

  addGame(): void {
    this.router.navigate(['/games/add']);
  }
}
