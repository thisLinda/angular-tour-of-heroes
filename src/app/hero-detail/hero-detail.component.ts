import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Parent (HeroesComponent)/child (HeroDetailComponent) relationship. The parent controls the child by sending it a new hero to display whenever the user selects a hero from the list.
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent binds to it like this.
  // This component only receives a hero object through its hero property and displays it in HTML
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero=> this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
