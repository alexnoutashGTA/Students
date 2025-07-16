import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  mapCenter = { lat: 43.7310, lng: -79.2240 };
  mapZoom = 10;
}
