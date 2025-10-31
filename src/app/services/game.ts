import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { mockContent } from '../data/mockcontent';


@Injectable({
  providedIn: 'root'
})
export class Game {
  private games: User[] = mockContent; // Local copy of game data

  constructor() { }

  // Returns all games
  getGames(): Observable<User[]> {
    return of(mockContent); // Return all games


  }
  //read
  //getting one game with id
  getGameWithId(id: number): Observable<User | undefined> {
    return of(this.games.find(g => g.id === id));
  }

  // adding new game
  addGame(newGame: User): Observable<User[]> {
    this.games.push(newGame);
    return of(this.games);
  }


  //updating game
  updateGame(updatedGame: User): Observable<User[]> {
    const index = this.games.findIndex(g => g.id === updatedGame.id);
    if (index !== -1) this.games[index] = updatedGame;
    return of(this.games);
  }

  //  deleting game
  deleteGame(id: number): Observable<User | undefined> {
    const index = this.games.findIndex(g => g.id === id);
    if (index === -1) return of(undefined);
    const [removed] = this.games.splice(index, 1);
    return of(removed);
  }



}
