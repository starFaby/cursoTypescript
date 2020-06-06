import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { PipeComponent } from './pipe/pipe.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FormreactivosComponent } from './formreactivos/formreactivos.component';
import { ProductosService } from './services/productos.service';
import { ProductComponent } from './product/product.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './services/persona.service';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'hijo/:padre/:madre', component: HijoComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'form', component: FormreactivosComponent },
  { path: 'product', component: ProductComponent },
  { path: 'persona', component: PersonaComponent },
  { path: '', component: InicioComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HijoComponent,
    NgifComponent,
    PipeComponent,
    InicioComponent,
    HeaderComponent,
    FormreactivosComponent,
    ProductComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductosService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
