import { Component, input } from '@angular/core';

// my interface (２箇所目の定義だけど合ってる？)
import { HousingLocationInfo } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-housing-location',
    imports: [RouterModule],
    template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().id }}: {{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
    </section>
  `,
    styleUrls: ['./housing-location.css'],
    //styles: ``
})
export class HousingLocation {
    housingLocation = input.required<HousingLocationInfo>();
}
