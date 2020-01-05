import { Component, OnInit } from '@angular/core';
import { PlacesService } from './services/places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.places = this.placesService.getAll();
  }

  //ciclo de vida de reconstrução de uma view com novos valores renderizados
  ionViewWillEnter() {
    this.places = this.placesService.getAll();
  }
  addNewPlace() {
    this.router.navigate(['/new-place']);
  }
}
