import { RouterModule } from '@angular/router';
import { DownComponent } from './down.component';

const routes = [
  { path: '', component: DownComponent },
];

export const DownRouting = RouterModule.forChild(routes);
