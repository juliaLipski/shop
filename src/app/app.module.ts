import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { LenService } from './services/len.serv';
import { PreloadarService } from './services/PrelodarService';
import { CartService } from './services/Cart.service';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { Home } from './pages/home/home.component';
import { ProductService } from './services/Products.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { AlertComponent } from './alert/alert-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule,MatSelectModule, MatDialogModule, MatPaginatorModule, MatGridListModule, MatListModule, MatExpansionModule, MatProgressBarModule, MatTooltipModule, MatProgressSpinnerModule, MatTabsModule, MatStepperModule, MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatTableModule, MatIconModule } from "@angular/material";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { OurProductsComponent } from './our-products/our-products.component';
import 'hammerjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    FooterComponent,
    MyCartComponent,
    Home,
    OurProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    MatProgressBarModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatStepperModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    AngularFontAwesomeModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOn05Dn-B6k6UwhXa1Wvgalo0_WpDLMUg',
      libraries: ["places"],
      region: 'IL'
    })
  ],
  providers: [
    ProductService,
    LenService,
    CartService,
    PreloadarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }