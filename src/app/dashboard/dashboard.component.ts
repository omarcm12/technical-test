import { Component, OnInit } from '@angular/core';
import { ArticlesServiceService } from '../articles-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private articleService: ArticlesServiceService){
  }

  articles: any = [];
  page: number = 1;

  ngOnInit(): void {
    this.getArticles();
  }

  addArticle(){
    const newArticle = {
      "id":10,
      "title": "Keeping the dream alive by traveling the world.",
      "description": "Integrate the lastes technologies with an innovative platform",
      "author": "ALIVE COOPER",
      "date": "2024-07-02"
    }
    this.articleService.post("http://localhost:3000/articles", newArticle).subscribe(r => {
        this.getArticles();
    });
  }

  getArticles(){
   const url = "http://localhost:3000/articles";
    this.articleService.get(url).subscribe(result => {
     this.articles = result;
     }
    )
  }


}
