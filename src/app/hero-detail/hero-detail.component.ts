import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

// Parent (HeroesComponent)/child (HeroDetailComponent) relationship. The parent controls the child by sending it a new hero to display whenever the user selects a hero from the list.
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  // The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent binds to it like this.
  // This component only receives a hero object through its hero property and displays it in HTML
  @Input() hero?: Hero;
}
