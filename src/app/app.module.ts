import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from 'src/pages/home/home';
import { LoginComponent } from 'src/pages/login/login';
import { NotFoundComponent } from 'src/pages/not-found/not-found';
import { HeaderComponent } from 'src/components/header/header';
import { FooterComponent } from 'src/components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
