import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { mockContent } from '../data/mockcontent';


@Injectable({
  providedIn: 'root'
})
export class Game {
  private games: User[] = [...mockContent]; // Local copy of game data

  constructor() { }

  // Returns all games
  getGames(): Observable<User[]> {
    return of(this.games); // Return all games


  }
  //read
  //getting one game with id
  getGameWithId(id: number): Observable<User | undefined> {
    return of(this.games.find(g => g.id === id));
  }

  // adding new game
  addGame(newGame: User): Observable<User[]> {

    const nextId = this.games.length
      ? Math.max(...this.games.map(g => g.id)) + 1
      : 1;


    this.games.push({ ...newGame, id: nextId });
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
  generateNewId(): number {
    return this.games.length > 0
      ? Math.max(...this.games.map(game => game.id)) + 1
      : 1;}



}
