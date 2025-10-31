import {Component, OnInit} from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { GameListItem } from '../game-list-item/game-list-item';
import { Game } from '../services/game';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, GameListItem,RouterModule],
  templateUrl: './game-list.html',
  standalone: true,
  styleUrls: ['./game-list.css']
})
export class GameList implements OnInit{
  gamesList: User[] = [];
  // dependency injection
  constructor(private game: Game,
              private router: Router) {}


  ngOnInit(): void {
    this.game.getGames().subscribe(list => {
      this.gamesList = list;
    });



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
