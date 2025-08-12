import { Component } from '@angular/core';
// my component 1
import { Home } from './home/home';

// Routing
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterModule], /* my component */
    //template: ` <h1>Hello World!!!!!</h1>  calc --> ( {{1+1}}, {{200 * 5}} ) `,
    template: ` <main>
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
        </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main> `,
    styleUrls: ['./app.css'],
})
export class App {
    title = 'app homes';
}
