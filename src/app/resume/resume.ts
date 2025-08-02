import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-resume',
  standalone: true, 
  templateUrl: './resume.html',
  styleUrls: ['./resume.css'],
  imports: [CommonModule] 
})
export class Resume {
  activeIndex: number | null = null;

  sections = [
    { title: 'Work Experience' },
    { title: 'Education' },
    { title: 'Certifications' },
    { title: 'Skills' }
  ];

  toggleSection(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/Mariem_CV.pdf';
    link.download = 'My_Resume.pdf';
    link.click();
  }
}
