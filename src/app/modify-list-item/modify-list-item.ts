import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule , FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../services/game';
import { User } from '../models/user';

import { HighlightOnFocus } from '../directives/highlight-on-focus';


@Component({
  selector: 'app-modify-list-item',
  imports: [CommonModule,HighlightOnFocus, ReactiveFormsModule,FormsModule,],
  standalone: true,
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItem implements OnInit{
  gameForm:FormGroup;
  game: User | undefined;
  error: string | null = null;
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.gameService.getGameWithId(id).subscribe({
        next: (g) => {
          if (g) {
            this.gameForm.patchValue(g);
          }
        },
        error: (err) => {
          this.error = 'Error fetching game';
          console.error('Error fetching game:', err);
        }
      });
    }
  }
  onSubmit(): void {
    if (this.gameForm.valid) {
      const game: User = this.gameForm.value;

      if (game.id) {
        this.gameService.updateGame(game).subscribe({
          next: () => this.router.navigate(['/games']),
          error: (err) => {
            this.error = 'Error updating game';
            console.error('Update failed:', err);
          }
        });
      } else {

        this.gameService.addGame(game).subscribe({
          next: () => this.router.navigate(['/games']),
          error: (err) => {
            this.error = 'Error adding game';
            console.error('Add failed:', err);
          }
        });
      }
    }}}





