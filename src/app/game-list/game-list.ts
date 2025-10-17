import {Component, OnInit} from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { GameListItem } from '../game-list-item/game-list-item';
import { Game } from '../services/game';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, GameListItem],
  templateUrl: './game-list.html',
  standalone: true,
  styleUrls: ['./game-list.css']
})
export class GameList implements OnInit{
  gamesList: User[] = [];
  // dependency injection
  constructor(private game: Game) {}


  ngOnInit(): void {
    this.game.getGames().subscribe(list => {
      this.gamesList = list;
    });

}}
