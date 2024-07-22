import { Component, OnInit} from '@angular/core';
import { ArticlesServiceService } from '../../services/articles-service.service';
import { API_URL } from '../../constants';

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
    this.getArticles();
  }

  getArticles(){
    this.articleService.get(`${API_URL}/articles`).subscribe(result => {
     this.articles = result;
     }
    )
  }
}
