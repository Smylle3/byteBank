import { NewBankTransferComponent } from './newBankTransfer/newBankTransfer.component';
import { ExtractComponent } from './extract/extract.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'extract', pathMatch: 'full' },
  { path: 'extract', component: ExtractComponent },
  { path: 'new-transfer', component: NewBankTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
