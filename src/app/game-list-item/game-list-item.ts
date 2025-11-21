import {Component, Input, OnInit} from '@angular/core';
import { User } from '../models/user';
import {NgIf} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import { NgOptimizedImage } from '@angular/common';
import { Game } from "../services/game";
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { StockStatusPipe } from '../pipes/stock-status-pipe';

import { HoverHighlightDirective } from '../directives/hover-highlight';

@Component({
  selector: 'game-list-item',
  imports: [NgIf,NgOptimizedImage,DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    StockStatusPipe,HoverHighlightDirective ],
  templateUrl: './game-list-item.html',
  standalone: true,
  styleUrls: ['./game-list-item.css']
})
export class GameListItem implements OnInit{
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
        error: (err) => { this.error = 'Error fetching game details'; console.error(err); }
      });
    }
  }



      }




