import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from '../services/http.service';

import { AppComponent } from '../components/app.component';
import { GetPdfComponent } from '../components/get-pdf/get-pdf.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { GetUsersComponent } from '../components/get-users/get-users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-pdf', component: GetPdfComponent },
  { path: 'get-users', component: GetUsersComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GetPdfComponent,
    NotFoundComponent,
    HomeComponent,
    GetUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule {}
