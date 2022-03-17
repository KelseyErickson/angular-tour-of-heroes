import { Component, OnInit } from "@angular/core";
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: "my-app",
  template: ` <h1>{{ title }}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li
        *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>`
    ,
  styles: [
    `
      .selected {
        background-color: #cfd8dc !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #eee;
        margin: 0.5em;
        padding: 0.3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #bbd8dc !important;
        color: white;
      }
      .heroes li:hover {
        color: #607d8b;
        background-color: #ddd;
        left: 0.1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607d8b;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: 0.8em;
        border-radius: 4px 0 0 4px;
      }
    `,
  ],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {
  }
  title = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
      this.getHeroes();
  }
}
