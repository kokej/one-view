import { RouterModule } from '@angular/router';
import { LeftComponent } from '../left/left.component';

const routes = [
  { path: '', component: LeftComponent },
];

export const LeftRouting = RouterModule.forChild(routes);
