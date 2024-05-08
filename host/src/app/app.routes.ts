import { Route } from '@angular/router';
import { AuthGuard, addRouteHostDefault } from '@bidv-auth/router';

let appRoutes: Route[] = [
  {
    path: 'bone',
    loadChildren: () => import('bone/Routes').then((m) => m.remoteRoutes),
    canActivate: [AuthGuard],
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
appRoutes = addRouteHostDefault(appRoutes);
export { appRoutes };
