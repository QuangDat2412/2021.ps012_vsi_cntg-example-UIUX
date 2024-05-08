import { Route } from '@angular/router';

const appRoutes: Route[] = [
  {
    path: 'bone',
    loadChildren: () => import('bone/Routes').then((m) => m.remoteRoutes),
    data: {
      appId: 'BONE',
    },
  },
  {
    path: '',
    redirectTo: 'bone',
    pathMatch: 'full',
  },
];
export { appRoutes };
