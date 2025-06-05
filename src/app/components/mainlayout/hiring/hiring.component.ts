import { Component } from '@angular/core';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent {
jobs = [
    {
      title: 'Tech Lead',
      experience: '10+ years',
      shift: 'R1 : 13:30 / 22:30',
      positions: 1,
      description: 'Data Visualization Tools - Power BI, Tableau, D3.js, etc.'
    },
    {
      title: 'Technical Architect',
      experience: '10+ years',
      shift: 'R1 : 11:30 / 20:30',
      positions: 1,
      description: 'Java, Node.js, Python, Google Cloud Platform, Microservices Architecture, etc.'
    },
    {
      title: 'Trainee - Business Development',
      experience: 'Fresher (Entry level)',
      shift: 'R2 : 18:30 / 03:30',
      positions: 4,
      description: 'Business Development, Excellent Communication Skills, Market Research, etc.'
    }
  ];

  expandedIndex: number | null = null;

  toggleDescription(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
