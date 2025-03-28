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
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      link: 'https://github.com/yourusername/portfolio'
    },
    {
      name: 'E-commerce App',
      description: 'An online store built with Angular and Firebase.',
      link: 'https://github.com/yourusername/ecommerce'
    }
  ];
}
