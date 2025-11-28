import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Game } from '../services/game';
import { User } from '../models/user';
import { HighlightOnFocus } from '../directives/highlight-on-focus';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css'],
  imports: [
    CommonModule,
    HighlightOnFocus,
    ReactiveFormsModule,
    FormsModule,


    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,MatTooltipModule
  ]
})
export class ModifyListItem implements OnInit {
  gameForm: FormGroup;
  game: User | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
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
    if (this.gameForm.invalid) {
      return;
    }

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
  }
}
