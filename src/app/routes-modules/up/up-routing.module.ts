import { RouterModule } from '@angular/router';
import { UpComponent } from './up.component';

const routes = [
  { path: '', component: UpComponent },
];

export const UpRouting = RouterModule.forChild(routes);
