import { PreloadarService } from './services/PrelodarService';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { Home } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
const appRoutes: Routes = [
  { path: 'home', component: Home, data: { preload: true } },
  { path: 'myCart', component: MyCartComponent, data: { preload: true } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }
];

RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
export const routing = RouterModule.forRoot(appRoutes);