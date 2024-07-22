import { Component, TemplateRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ArticlesServiceService } from '../../services/articles-service.service';
import { Output, EventEmitter } from '@angular/core';
import { API_URL } from '../../constants';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss'
})
export class AddArticleComponent {

  @Output() updateArticles = new EventEmitter();
  @Input() article: any;
  modalRef?: BsModalRef;

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    date: new UntypedFormControl(''),
    favorite: new UntypedFormControl(false)
  });

  constructor(
    private modalService: BsModalService, 
    private articlesService: ArticlesServiceService  
  ) {}


  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalRef?.hide();
  }

  saveArticle(){
    this.form.patchValue({ ...this.form.value, id: Date.now().toString(), date: new Date()})
    const newArticle = this.form.value;
    this.articlesService.post(`${API_URL}/articles`, newArticle).subscribe(r => {
      this.updateArticles.emit();
      this.cleanUpForm();
      this.closeModal();
    });
  }

  cleanUpForm(){
    this.form.patchValue({
      id: '',
      title: '',
      description: '',
      author: '',
      date: '',
      favorite: false
    })
  }

}
