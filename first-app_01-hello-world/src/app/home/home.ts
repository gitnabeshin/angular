import { Component } from '@angular/core';

// my component 2
import { HousingLocation } from '../housing-location/housing-location';

@Component({
    selector: 'app-home',
    imports: [HousingLocation], // my component
    template: `
    <p>
      app home works!
    </p>
    <section>
        <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
    styleUrls: ['./home.css'],
})
export class Home {

}
