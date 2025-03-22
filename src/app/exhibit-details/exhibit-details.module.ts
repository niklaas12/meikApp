import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitDetailsComponent } from './exhibit-details.component';
import { ExhibitDetailsService } from './exhibit-details.service';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ExhibitDetailsComponent } 
];

@NgModule({
  declarations: [ExhibitDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ExhibitDetailsService,
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class ExhibitDetailsModule { }
