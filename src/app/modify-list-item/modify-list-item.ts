import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule , FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../services/game';
import { User } from '../models/user';



@Component({
  selector: 'app-modify-list-item',
  imports: [CommonModule, ReactiveFormsModule,FormsModule,],
  standalone: true,
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItem implements OnInit{
  gameForm:FormGroup;
  game: User | undefined;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private gameService: Game
  ) {

    this.gameForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      genre: ['', Validators.required],
      inStock: [true],
      multiplayer: [false],
      imgUrl: ['']
    });



}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameWithId(+id).subscribe(game => {
        if (game) {
          this.game = game;

          this.gameForm.patchValue(game);
        }
      });
    }
  }
  onSubmit(): void {
    const game: User = this.gameForm.value;


    if (game.id) {
      this.gameService.updateGame(game).subscribe(() => {
        this.router.navigate(['/games']);
      });
    } else {

      const newId = this.gameService.generateNewId();
      game.id = newId;
      this.gameService.addGame(game).subscribe(() => {
        this.router.navigate(['/games']);
      });
    }
  }}




