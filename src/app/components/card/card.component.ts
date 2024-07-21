import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesServiceService } from '../../services/articles-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input() article: any;
  @Output() updateArticles = new EventEmitter();
  @Output() updateArticle = new EventEmitter();

  constructor(
    private articlesService: ArticlesServiceService
  ){}

  ngOnInit(): void {
    console.log(this.article)
  }

  deleteArticle(){
    this.articlesService.delete("http://localhost:3000/articles/" + this.article.id).subscribe( r => {
      this.updateArticles.emit();
    })
  }

  editArticle(){
    this.updateArticle.emit(this.article);
  }
  
  markAsFavorite(){
    this.articlesService.put("http://localhost:3000/articles/" + this.article.id, { ...this.article, favorite: !this.article.favorite }).subscribe( r => {
      this.updateArticles.emit();
    })
  }
}
