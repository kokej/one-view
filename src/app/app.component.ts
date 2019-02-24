import { Component, OnInit, HostListener } from '@angular/core';
import { AppRouting } from './app-routing.module';
import { routerTransition } from './router.animations';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { tap, map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-op',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {
  private direction: string;
  private route: any;
  private key_code = {
    up: 38,
    down: 40,
    right: 39,
    left: 37
  };
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case this.key_code.down:
        this.navigate('down');
        break;
      case this.key_code.up:
        this.navigate('up');
        break;
      case this.key_code.right:
        this.navigate('right');
        break;
      case this.key_code.left:
        this.navigate('left');
        break;
      default:
        break;
    }
  }

  navigate(direction) {
    const positionInArray = this.route['from'].indexOf(direction);
    if (positionInArray < 0) {
      return;
    }
    const route = this.route['to'][positionInArray];
    this.router.navigate([`/${route}`]);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  routerListener() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        console.log('data --> ', data);
        this.route = data;
      });
  }

  ngOnInit() {
    this.routerListener();
  }
}
