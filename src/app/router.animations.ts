import {
  trigger,
  animate,
  style,
  group,
  query,
  transition
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('right => home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('left => home', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
        optional: true
      }),
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('up => home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
        optional: true
      }),
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('down => home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('* => left', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('* => right', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
        optional: true
      }),
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('* => up', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('* => down', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
        optional: true
      }),
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ])
]);
