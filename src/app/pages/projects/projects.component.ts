import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor,NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  zoomedImage: string | null = null; // Stores the zoomed image

  toggleZoom(imageUrl?: string): void {

    this.zoomedImage = imageUrl || null;
    console.log("After this.isZoomed " + this.zoomedImage);
    console.log("URL isZoomed " + imageUrl);
  }

  projects = [
    {
      name: '1) OpenStreet Map Integration Project',
      description: 'Developed an interactive map application with selected brand location from dropdown list using Angular and Leaflet.js for real-time location visualization.',
      link: 'https://github.com/shikha061987/Open-Street-Map',
      image: 'https://i.imgur.com/HTIEdoX.png' ,// Add your image URL or path here
      isZoomed: false


    },
    {
      name: '2) Grocery List Management Application',
      description: 'Developed a dynamic, user-friendly web application to manage and organize grocery shopping lists. The application allows users to create, update, and delete grocery items. Data is integated with mock apis.This project focused on enhancing user experience through an intuitive interface and employing best practices in Angular development.',
      link: 'https://github.com/shikha061987/grocery-list',
      image: 'https://i.imgur.com/HJFvhaP.png' ,// Add your image URL or path here
      isZoomed: false


    },
    {
      name: '3) User Login Authentication Application',
      description: 'Developed a user authentication website using Angular, integrating various features such as login, cotact information,about us,students details,books details, and session management.	Implemented form validation and error handling for login to improve user experience and reduce errors.',
      link: 'https://github.com/shikha061987/login-auth-guard',
      image: 'https://i.imgur.com/e36ewxy.png' ,// Add your image URL or path here
      isZoomed: false


    }
  ];
}
