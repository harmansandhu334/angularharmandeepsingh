import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { GameList } from './app/game-list/game-list';
import { GameListItem } from './app/game-list-item/game-list-item';

import { InMemoryDataService } from './app/services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

import { ModifyListItem } from './app/modify-list-item/modify-list-item';
import { PageNotFound } from './app/page-not-found/page-not-found';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



// routes
const routes: Routes = [

  { path: '', redirectTo: '/games', pathMatch: 'full' }, // default route

  { path: 'games', component: GameList },



  {
    path: 'game-item',
    loadComponent: () =>
      import('./app/game-list-item/game-list-item').then(m => m.GameListItem)
  },




  {
    path: 'games/add',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item').then(m => m.ModifyListItem)
  },



  {
    path: 'games/:id/edit',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item').then(m => m.ModifyListItem)
  },







  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found').then(m => m.PageNotFound)
  }







];
bootstrapApplication(App, {
  providers: [provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
    provideAnimationsAsync(),


    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
  .then(r => console.log('Bootstrap successful'));
