import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'OpenStreet Map Integration Project',
      description: 'Developed an interactive map application using Angular and Leaflet.js for real-time location visualization.',
      link: 'https://github.com/shikha061987/Open-Street-Map'
    },
    {
      name: 'Grocery List Management Application',
      description: 'Built a dynamic Grocery List application, enabling users to add and remove grocery items with mock data integration.',
      link: 'https://github.com/shikha061987/grocery'
    }
  ];
}
