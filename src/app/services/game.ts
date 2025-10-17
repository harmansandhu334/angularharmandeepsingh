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
    return of([
      {
        id: 1,
        title: 'Cricket 24',
        genre: 'Sports',
        inStock: true,
        multiplayer: true,

        imgUrl: 'https://www.istockphoto.com/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass-gm177427917-21498996?searchscope=image%2Cfilm'
      },
      {
        id: 2,
        title: 'Ashes Cricket',
        genre: 'Sports',
        inStock: false,
        multiplayer: true,

        imgUrl: 'https://www.vecteezy.com/photo/27912268-indian-cricket-team-with-national-flag'
      },
      {
        id: 3,
        title: 'Kabaddi Clash',
        genre: 'Sports',
        inStock: true,
        multiplayer: true,

        imgUrl: 'https://imgbin.com/png/Tm2JPwV6/asian-games-asian-beach-games-japan-national-kabaddi-team-sport-png#google_vignette'
      },
      {
        id: 4,
        title: 'Carrom Board',
        genre: 'Indoor',
        inStock: true,
        multiplayer: true,

        imgUrl: 'https://www.istockphoto.com/photo/carrom-board-game-gm484864454-70961197'
      }
    ]);


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
