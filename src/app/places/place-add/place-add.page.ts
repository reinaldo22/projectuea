import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title: HTMLInputElement, imagemURL: HTMLInputElement, comments: any) {
    this.placesService.addPlace(title.value, imagemURL.value, comments.value);
    this.router.navigate(['/places']);
  }
}
