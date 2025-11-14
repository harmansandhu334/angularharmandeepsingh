

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../models/user';

export class InMemoryDataService implements InMemoryDbService {


  createDb(): { games: User[] } {


    const games: User[] = [
      { id: 1, title: 'Cricket 24',    genre: 'Sports',  inStock: true,  multiplayer: true,  imgUrl: 'assets/images/cricket1.jpg',price: 79.95, releaseDate: '2021-04-10' },
      { id: 2, title: 'Ashes Cricket', genre: 'Sports',  inStock: false, multiplayer: true,  imgUrl: 'assets/images/cricket1.jpg' ,price: 73.95, releaseDate: '2021-04-10'},
      { id: 3, title: 'Kabaddi Clash', genre: 'Sports',  inStock: true,  multiplayer: true,  imgUrl: 'assets/images/kabaddi.jpg',price: 81.95, releaseDate: '2021-04-10' },
      { id: 4, title: 'Carrom Board',  genre: 'Indoor',  inStock: true,  multiplayer: true,  imgUrl: 'assets/images/carromboard.jpg' ,price: 78.95, releaseDate: '2021-04-10'}
    ];


    return { games };
  }
}
