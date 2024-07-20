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

  articles: { id: number; title: string; description: string; author: string; date: string; }[] = [];

  ngOnInit(): void {
    this.articles = this.articleService.getArticles().articles;
  }


}
