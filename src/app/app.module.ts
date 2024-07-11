import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileListComponent } from './pages/profile/profile-list/profile-list.component';
import { ProfileCreateUpdateComponent } from './pages/profile/profile-create-update/profile-create-update.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { ProfileTableComponent } from './components/profile-table/profile-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileListComponent,
    ProfileCreateUpdateComponent,
    ProfileTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
