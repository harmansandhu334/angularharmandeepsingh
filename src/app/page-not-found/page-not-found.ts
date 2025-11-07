import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink,CommonModule],
  standalone: true,
  templateUrl: './page-not-found.html',
  styleUrls: ['./page-not-found.css']
})
export class PageNotFound {

}
