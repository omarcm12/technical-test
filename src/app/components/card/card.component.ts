import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticlesServiceService } from '../../services/articles-service.service';
import { API_URL } from '../../constants';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() article: any;
  @Output() updateArticles = new EventEmitter();
  @Output() updateArticle = new EventEmitter();

  constructor(
    private articlesService: ArticlesServiceService
  ){}

  deleteArticle(){
    this.articlesService.delete(`${API_URL}/articles/${this.article.id}`).subscribe( r => {
      this.updateArticles.emit();
    })
  }

  editArticle(){
    this.updateArticle.emit(this.article);
  }

  get favoriteTooltip(){
    return this.article.favorite ? "Unmark as favorite" : "Mark as favorite";
  }
  
  markAsFavorite(){
    this.articlesService.put(`${API_URL}/articles/${this.article.id}`, { ...this.article, favorite: !this.article.favorite }).subscribe( r => {
      this.updateArticles.emit();
    })
  }
}
