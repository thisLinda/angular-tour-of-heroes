import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // The error "Type is not assignable to type 'never'" occurs when we declare an empty array without explicitly typing it and attempt to mutate the array. To solve the error, explicitly type the empty array, e.g. const arr: string[] = [];.https://bobbyhadz.com/blog/typescript-type-is-not-assignable-to-type-never
  // heroes = Hero[] = [];
  // heroes: Hero[] = [];

  // Add a private heroService parameter of type HeroService to the constructor. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site. When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.

  // While you could call getHeroes() in the constructor, that's not the best practice.Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // ngOnInit is a lifecycle hook
  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously. The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously.***This approach won't work in a real application that uses asynchronous calls. It works now because your service synchronously returns mock heroes.***
  // In this tutorial, HeroService.getHeroes() returns an Observable so that it can use the Angular HttpClient.get method to fetch the heroes and have HttpClient.get() return an Observable.
  // Waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.This asynchronous approach works when the HeroService requests heroes from the server.

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
