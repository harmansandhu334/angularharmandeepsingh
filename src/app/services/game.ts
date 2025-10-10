import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { mockContent } from '../data/mockcontent';


@Injectable({
  providedIn: 'root'
})
export class Game {
  private games: User[] = mockContent; // Local copy of game data for CRUD Operations

  constructor() { }

  // Returns all games
  getGames(): Observable<User[]> {
    return of(mockContent); // Return an observable that emits mock game data
  }

}
