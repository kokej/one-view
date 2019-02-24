import { RouterModule } from '@angular/router';
import { HomeComponent } from './routes-modules/home/home.component';
import { NotFoundComponent } from './not-found.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      state: 'home',
      from: ['left', 'right', 'up', 'down'],
      to: ['left', 'right', 'up', 'down']
    }
  },
  {
    path: 'left',
    loadChildren: './routes-modules/left/left.module#LeftModule',
    data: {
      state: 'left',
      from: ['right'],
      to: ['home']
    }
  },
  {
    path: 'right',
    loadChildren: './routes-modules/right/right.module#RightModule',
    data: {
      state: 'right',
      from: ['left'],
      to: ['home']
    }
  },
  {
    path: 'up',
    loadChildren: './routes-modules/up/up.module#UpModule',
    data: {
      state: 'up',
      from: ['down'],
      to: ['home']
    }
  },
  {
    path: 'down',
    loadChildren: './routes-modules/down/down.module#DownModule',
    data: {
      state: 'down',
      from: ['up'],
      to: ['home']
    }
  },

  { path: '**', component: NotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
