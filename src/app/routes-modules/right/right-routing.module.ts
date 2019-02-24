import { RouterModule } from '@angular/router';
import { RightComponent } from './right.component';

const routes = [
  { path: '', component: RightComponent },
];

export const RightRouting = RouterModule.forChild(routes);
