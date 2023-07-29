import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from 'src/pages/home/home';
import { LoginComponent } from 'src/pages/login/login';
import { NotFoundComponent } from 'src/pages/not-found/not-found';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
