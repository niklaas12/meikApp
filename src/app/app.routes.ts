import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./qr/qr.module').then(m => m.QrModule) },
    { path: 'exhibit/details/:id', loadChildren: () => import('./exhibit-details/exhibit-details.module').then(m => m.ExhibitDetailsModule) }
];