import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  constructor() { }

  db = {articles:[
    {
      "id": 1,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 2,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 3,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 4,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 5,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 6,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 7,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 8,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    }
  ]}

  getArticles(){
    return this.db;
  }
}
