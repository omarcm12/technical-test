import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss'
})
export class EditArticleComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService  
  ) {}

  ngOnInit(): void {
    /*this.form = new FormGroup({
      id: new UntypedFormControl(''),
      title: new UntypedFormControl(''),
      description: new UntypedFormControl(''),
      author: new UntypedFormControl(''),
      date: new UntypedFormControl('')
    });*/
  }

  form = new FormGroup({
    id: new FormControl('some value'),
    title: new FormControl('value'),
    description: new FormControl(''),
    author: new FormControl(''),
    date: new FormControl('')
  });
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
