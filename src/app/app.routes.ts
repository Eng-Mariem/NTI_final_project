// import { RouterModule,Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// // import { Contact } from './contact/contact';
// import { Resume } from './resume/resume';
// import { Portfolio } from './portfolio/portfolio';
// import { Home } from './home/home';



// export const routes: Routes = [
//     // { path: '**', component:Home, pathMatch: 'full' },  

//  { path: 'home', component:Home },
//   { path: 'portfolio', component:Portfolio },
//   { path: 'resume', component: Resume },
//   // { path: 'contact', component: Contact }


// ];
// @NgModule({
// imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact/contact';
import { Resume } from './resume/resume';
import { Portfolio } from './portfolio/portfolio';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'resume', component: Resume },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
