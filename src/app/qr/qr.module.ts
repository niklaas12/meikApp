import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QrComponent } from './qr.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
  { path: '', component: QrComponent } // Leere Route für Lazy Loading
];

@NgModule({
  declarations: [QrComponent],
  imports: [
    CommonModule,
    ZXingScannerModule,
    RouterModule.forChild(routes) // Lazy Loading der QR-Komponente
  ]
})
export class QrModule { }
