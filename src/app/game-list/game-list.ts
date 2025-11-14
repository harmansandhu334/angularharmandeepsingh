import {Component, OnInit} from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { GameListItem } from '../game-list-item/game-list-item';
import { Game } from '../services/game';
import { RouterModule } from '@angular/router';
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, GameListItem,RouterModule,RouterLink,DatePipe,
    UpperCasePipe,
    CurrencyPipe],
  templateUrl: './game-list.html',
  standalone: true,
  styleUrls: ['./game-list.css']
})
export class GameList implements OnInit{
  gamesList: User[] = [];

  error: string | null = null;

  // dependency injection
  constructor(private game: Game,
              private router: Router
             ) {

  }


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
