import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { project } from '../_modles/project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './projectcard.html',
  styleUrls: ['./projectcard.css']
})
export class Projectcard {
  @Input() project: project = {} as project;

  bsModalRef?: BsModalRef;
  @ViewChild('projectModal') projectModal!: TemplateRef<any>;

  constructor(private modalService: BsModalService) {}

  openProjectModal(): void {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      }
    };

    this.bsModalRef = this.modalService.show(this.projectModal, modalOptions);
  }
}
