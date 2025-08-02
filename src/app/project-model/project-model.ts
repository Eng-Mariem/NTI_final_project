import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { project } from '../_modles/project';

@Component({
  selector: 'app-project-model',
  imports: [],
  templateUrl: './project-model.html',
  styleUrl: './project-model.css'
})
export class ProjectModel {
  // project ={} as project;
constructor(public bsModalRef :BsModalRef){

}
}
