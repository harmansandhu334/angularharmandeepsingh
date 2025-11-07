import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


import {HttpClient, HttpErrorResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class Game {
  private apiUrl = 'api/games';


  constructor(private http: HttpClient) {}



  // Returns all games
  getGames(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => this.handleError(error))
    );


  }
  //read
  //getting one game with id
  getGameWithId(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  // adding new game
  addGame(newGame: User): Observable<User> {

    return this.http.post<User>(this.apiUrl, newGame).pipe(
      catchError((error) => this.handleError(error))
    );
  }



  //updating game
  updateGame(updatedGame: User): Observable<User> {

    return this.http.put<User>(`${this.apiUrl}/${updatedGame.id}`, updatedGame).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  //  deleting game
  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }


  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}
