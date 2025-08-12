import { Component, inject } from '@angular/core';

// my component 2
import { HousingLocation } from '../housing-location/housing-location';

// my interface
import { HousingLocationInfo } from '../housinglocation';

// my service (inject)
import { HousingService } from '../housing.service';

@Component({
    selector: 'app-home',
    imports: [HousingLocation], // my component
    template: `
    <p>
      My anglar study. "App Home"
    </p>
    <section>
        <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
      @for(housingLocation of housingLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
    styleUrls: ['./home.css'],
})
export class Home {

    housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);
    constructor() {
        //Get data list from injected service
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }
}
