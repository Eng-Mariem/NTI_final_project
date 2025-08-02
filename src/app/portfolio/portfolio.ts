import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projectcard } from "../projectcard/projectcard"; 
import{project} from"../_modles/project"
import { table } from 'node:console';
import { tag } from '../_modles/tag';
import { CommonModule } from '@angular/common';
import { Projects } from '../_services/projects';

@Component({
  selector: 'app-portfolio',
  imports: [Projectcard,CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {

  projects = {} as project[];
  // isCollapsed = true;
  
constructor(private titleservise:Title,private projectservices: Projects){
this.titleservise.setTitle("Mariam Abdelrhman_portfolio")
}ngOnInit(): void {
  this.projects=this.projectservices .getprojects();
  }
;
}
