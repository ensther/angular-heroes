import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Owner } from './owner';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{owner.name}}, here are your heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  providers: [HeroService]
})
export class AppComponent  {
  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
  owner: Owner = {
    name: 'Wololo'
  };
  /*heroes = HEROES;*/
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    /*this.heroes = this.heroService.getHeroes();*/
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}