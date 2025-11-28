import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgOptimizedImage, DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../models/user';
import { Game } from '../services/game';
import { StockStatusPipe } from '../pipes/stock-status-pipe';
import { HoverHighlightDirective } from '../directives/hover-highlight';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'game-list-item',
  standalone: true,
  templateUrl: './game-list-item.html',
  styleUrls: ['./game-list-item.css'],
  imports: [
    NgIf,
    NgOptimizedImage,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    StockStatusPipe,
    HoverHighlightDirective,


    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class GameListItem implements OnInit {
  @Input() game: User | undefined;

  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: Game,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (this.game) return;

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.gameService.getGameWithId(id).subscribe({
        next: (g) => { this.game = g; this.error = null; },
        error: (err) => {
          this.error = 'Error fetching game details';
          console.error(err);
        }
      });
    }
  }
}
