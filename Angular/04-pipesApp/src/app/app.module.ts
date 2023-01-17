import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PrimeNgModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-HN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
