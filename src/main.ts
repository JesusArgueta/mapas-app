import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiYXJndWV0YTY5IiwiYSI6ImNsbGFrdXlsMjAzbHEzam05aXlvYnNtYmkifQ.S52KGmSJDcU8wrGTd4tMFg';


if(!navigator.geolocation) {
  alert('Navegador no soporta la Geolocation')
  throw new Error('Navegador no soporta la Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
