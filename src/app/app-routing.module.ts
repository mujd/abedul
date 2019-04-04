import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Paginas
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
  {
    path: 'productos',
    component: ProductosComponent,
    data: { titulo: 'Productos' }
  },
  { path: 'nosotros', component: AboutComponent, data: { titulo: 'About' } },
  {
    path: 'contacto',
    component: ContactComponent,
    data: { titulo: 'Contact' }
  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
  /* { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
