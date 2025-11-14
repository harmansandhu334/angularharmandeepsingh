import { User } from '../models/user';

export const mockContent: User[] = [
  { id: 1, title: 'Cricket 24',     genre: 'Sports',      inStock: true,  multiplayer: true ,
    imgUrl: 'assets/images/cricket1.jpg',price: 79.99, releaseDate: '2021-04-10' },
  { id: 2, title: 'Ashes Cricket',  genre: 'Sports',      inStock: false, multiplayer: true ,   imgUrl: 'assets/images/cricket1.jpg',price: 19.99,
    releaseDate: '2022-07-20'},
  { id: 3, title: 'Kabaddi Clash',  genre: 'Sports',      inStock: true,  multiplayer: true,   imgUrl: 'assets/images/kabaddi.jpg',price: 49.5,
    releaseDate: '2023-12-07' },
  { id: 4, title: 'Carrom Board',   genre: 'Indoor',      inStock: true,  multiplayer: true ,   imgUrl: 'assets/images/carromboard.jpg',price: 49.5,
    releaseDate: '2022-1o-09'}
];
