import { Injectable } from '@angular/core';
import { project } from '../_modles/project';
import { tag } from '../_modles/tag';
@Injectable({
  providedIn: 'root'
})
export class Projects {
   projects:project[]=[
  {
    id: 0,
    name: "Sample Angular App",
    summary: "Test Description",
    description: "A project built using Angular and TypeScript.",
    projectlink: "https://github.com/user/angular-app",
    tags: [tag.ANGULAR, tag.TYPESCRIPT],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 1,
    name: "React Weather App",
    summary: "Weather data with OpenWeather API",
    description: "A React app fetching weather information using APIs.",
    projectlink: "https://github.com/user/react-weather",
    tags: [tag.REACT, tag.JAVASCRIPT],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 2,
    name: "Java Portfolio Site",
    summary: "Static portfolio site built with Java and JSP",
    description: "Deployed with Tomcat and includes a working contact form.",
    projectlink: "https://github.com/user/java-portfolio",
    tags: [tag.JAVA],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 3,
    name: "C# Inventory App",
    summary: "WinForms desktop app",
    description: "Tracks inventory and sales using a SQL Server backend.",
    projectlink: "https://github.com/user/csharp-inventory",
    tags: [tag.CSHARP],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 4,
    name: "Node.js Blog API",
    summary: "RESTful API for a blog system",
    description: "Built with Node.js and Express, connected to MongoDB.",
    projectlink: "https://github.com/user/node-blog-api",
    tags: [tag.NODEJS],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 5,
    name: "Python Data Analyzer",
    summary: "CSV & Excel data insights",
    description: "A Python app using pandas and matplotlib to analyze large datasets.",
    projectlink: "https://github.com/user/python-analyzer",
    tags: [tag.PYTHON],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 6,
    name: "ASP.NET Task Manager",
    summary: "Web-based task management",
    description: "Built with ASP.NET MVC and Entity Framework with role-based access.",
    projectlink: "https://github.com/user/aspnet-task-manager",
    tags: [tag.ASPNET, tag.CSHARP],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 7,
    name: "JavaScript Game",
    summary: "Browser-based mini-game",
    description: "Built with vanilla JavaScript and HTML5 canvas for simple animations.",
    projectlink: "https://github.com/user/js-game",
    tags: [tag.JAVASCRIPT],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 8,
    name: "React E-Commerce UI",
    summary: "Frontend-only shop design",
    description: "A modern e-commerce UI built with React and styled-components.",
    projectlink: "https://github.com/user/react-ecommerce-ui",
    tags: [tag.REACT, tag.JAVASCRIPT],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 9,
    name: "Node.js Chat Server",
    summary: "Real-time messaging",
    description: "A chat server using WebSockets (Socket.io) and Node.js.",
    projectlink: "https://github.com/user/node-chat",
    tags: [tag.NODEJS, tag.JAVASCRIPT],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 10,
    name: "Java Banking System",
    summary: "Simple console-based banking system",
    description: "Includes account creation, withdrawal, deposit, and logs.",
    projectlink: "https://github.com/user/java-bank",
    tags: [tag.JAVA],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  },
  {
    id: 11,
    name: "Angular Portfolio Site",
    summary: "This very site!",
    description: "Portfolio website built with Angular, TypeScript, and Bootstrap.",
    projectlink: "https://github.com/user/angular-portfolio",
    tags: [tag.ANGULAR, tag.TYPESCRIPT],
pictures: ["assets/img1.png", "assets/img2.jpeg", "assets/img3.jpg"]
  }
];
getprojects(){
  return this.projects;
}
getprojectbyid(id:number):project{
let project =this.projects.find(project=>project.id===id);
if (project===undefined){
  throw new TypeError(" There is no project that matchs the id "+id);
}
return project;
}
}
