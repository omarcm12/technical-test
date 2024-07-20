import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  constructor() { }

  db = {articles:[
    {
      "id": 1,
      "title": "Post 1",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 2,
      "title": "Post 2",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 3,
      "title": "Post 3",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 4,
      "title": "Post 1",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 5,
      "title": "Post 2",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 6,
      "title": "Post 1",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 7,
      "title": "Post 2",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    },
    {
      "id": 8,
      "title": "Post 3",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": '2024-07-02'
    }
  ]}

  getArticles(){
    return this.db;
  }
}
