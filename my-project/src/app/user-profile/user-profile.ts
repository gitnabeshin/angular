import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    imports: [],
    templateUrl: './user-profile.html',
    styleUrl: './user-profile.css'
})

export class UserProfile {
    protected firstName = signal('Morgan');
    protected firstNameCapitalized = computed(() => this.firstName().toUpperCase());
    constructor() {
        console.log(`First Name is [`, this.firstName(), `][`, this.firstNameCapitalized(), `]`);

        this.firstName.set('Jaime');
        console.log(`First Name is [`, this.firstName(), `][`, this.firstNameCapitalized(), `]`);

        this.firstName.update(name => name.toUpperCase());
        console.log(`First Name is [`, this.firstName(), `][`, this.firstNameCapitalized(), `]`);
    }
}
