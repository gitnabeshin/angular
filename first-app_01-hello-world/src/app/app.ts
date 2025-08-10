import { Component } from '@angular/core';
// my component 1
import { Home } from './home/home';

@Component({
    selector: 'app-root',
    imports: [Home], /* my component */
    //template: ` <h1>Hello World!!!!!</h1>  calc --> ( {{1+1}}, {{200 * 5}} ) `,
    template: ` <main>
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
        <section class="content">
          <app-home></app-home>
        </section>
      </main> `,
    styleUrls: ['./app.css'],
})
export class App {
    title = 'app homes';
}
