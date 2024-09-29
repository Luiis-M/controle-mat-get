import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { getAnalytics } from "firebase/analytics";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotebooksComponent } from './components/notebooks/notebooks.component';
import { DispositivosDeRedeComponent } from './components/dispositivos-de-rede/dispositivos-de-rede.component';
import { ImpressorasComponent } from './components/impressoras/impressoras.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';



@NgModule({
  declarations: [
    AppComponent,
    NotebooksComponent,
    DispositivosDeRedeComponent,
    ImpressorasComponent,
    PerifericosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
