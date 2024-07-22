import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddArticleComponent } from './components/add-article/add-article.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CardComponent,
    LoginModalComponent,
    SearchBarComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    provideClientHydration(),
    BsModalService,
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
