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

  ngOnInit(): void {
    this.articleService.get("http://localhost:3000/articles").subscribe(result  => {
       this.articles = result;
      }
     )
    
  }


}
