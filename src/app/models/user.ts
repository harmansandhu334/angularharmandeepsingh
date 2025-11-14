export interface User {
  id: number;
  title: string;
  genre: string;
  inStock: boolean;
  multiplayer?: boolean;
  imgUrl: string;
  price: number;
  releaseDate: string;

}
