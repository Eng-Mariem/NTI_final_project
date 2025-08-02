import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { Projects } from '../_services/projects';
import { project } from '../_modles/project';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  featuredproject={} as project;
constructor(private titleservise:Title,private projectservices: Projects){
this.titleservise.setTitle("Mariam Abdelrhman_home")
}ngOnInit(): void {
this.featuredproject=this.projectservices.getprojectbyid(0) }
;
}
