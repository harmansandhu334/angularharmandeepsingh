import { User } from '../models/user';

export const mockContent: User[] = [
  { id: 1, title: 'Cricket 24',     genre: 'Sports',      inStock: true,  multiplayer: true ,  imgUrl: 'assets/images/cricket1.jpg' },
  { id: 2, title: 'Ashes Cricket',  genre: 'Sports',      inStock: false, multiplayer: true ,   imgUrl: 'assets/images/cricket1.jpg'},
  { id: 3, title: 'Kabaddi Clash',  genre: 'Sports',      inStock: true,  multiplayer: true,   imgUrl: 'assets/images/kabaddi.jpg' },
  { id: 4, title: 'Carrom Board',   genre: 'Indoor',      inStock: true,  multiplayer: true ,   imgUrl: 'assets/images/carromboard.jpg'}
];
