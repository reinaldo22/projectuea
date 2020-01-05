import { PlaceModel } from './../place-model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PlacesService {



  private places: PlaceModel[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imagemURL: 'https://cdn.pixabay.com/photo/2015/07/13/14/40/paris-843229__340.jpg',
      comments: ['Lugar maravilhoso!']
    },
    {
      id: '2',
      title: 'Estátua da liberdade',
      imagemURL: 'https://cdn.pixabay.com/photo/2015/11/07/11/50/statue-of-liberty-1031550__340.jpg',
      comments: ['Lugar maravilhoso!']
    },
    {
      id: '3',
      title: 'Sem comentarios',
      imagemURL: 'https://cdn.pixabay.com/photo/2015/11/07/11/50/statue-of-liberty-1031550__340.jpg',
      comments: []
    }

  ];

  constructor() { }


  getAll() {
    return [...this.places];

  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  addPlace(title: string, imagemURL: string, comments: string[]) {

    this.places.push({
      title,
      imagemURL,
      comments: [],
      id: this.places.length + 1 + ''
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }
}
