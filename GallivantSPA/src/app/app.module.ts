import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Third Party Modules
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//My Modules
import { VisitDetailsComponent } from './Map/visit-details/visit-details.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { SearchBarComponent } from './Shared/search-bar/search-bar.component';
import { TestytestComponent } from './Map/testytest/testytest.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { MapComponent } from './Map/map/map.component';

//Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

//Angular Display Modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    VisitDetailsComponent,
    TestytestComponent,
    HomePageComponent,
    NavbarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
