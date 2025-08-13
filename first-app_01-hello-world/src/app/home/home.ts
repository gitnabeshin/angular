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
    <section>
        <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        </form>
    </section>
    <section class="results">
      @for(housingLocation of filteredLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
    styleUrls: ['./home.css'],
})
export class Home {

    housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);

    // initial total list for search
    filteredLocationList: HousingLocationInfo[] = [];

    constructor() {
        //Get data list from injected service
        this.housingLocationList = this.housingService.getAllHousingLocations();

        // save initial total list
        this.filteredLocationList = this.housingLocationList;
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }

        // This is not a exactly search func, filtering.
        this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
            housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
        );
    }
}
