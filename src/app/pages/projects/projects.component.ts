import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
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

      name: '1) Angular Movie Explorer Project',
      description: 'Developed a responsive single-page application that allows users to explore movies, view detailed information, and search by title, genre, or rating. Implemented reusable components, utilized a JSON database to fetch data, and built a responsive UI using Bootstrap. Key features include dynamic routing, movie detail modals, and a user feedback form. Integrated Firebase Authentication and successfully deployed the application.',
      link: 'https://angular-movies-app-25f82.web.app/home',
      image: 'https://imgur.com/H0L61kz.png',// Add your image URL or path here
      isZoomed: false


    },
    {

      name: '2) ShopNest E-Commerce Application',
      description: 'Developed a responsive e-commerce application using Angular 19, integrating CSS, Angular Material, and Bootstrap. Implemented REST server Api and fetched data using behavioral observable.Used Angular Router and HttpClient for a full SPA experience. Implement search products by category features, and show shopping product listing, product add to cart, remove from cart, and details shopping product features. ',
      link: 'https://shopping-ecommerceapp.web.app',
      image: 'https://imgur.com/m1AntaL.png',// Add your image URL or path here
      isZoomed: false


    },
 {
      name: '3) Live Data Chart Dashboard Application',
      description: 'Developed a real-time data visualization dashboard using Angular and Chart.js, featuring dynamic, live-updating charts including line, bar, pie, and bubble types to effectively represent data; designed a responsive UI for seamless desktop and mobile viewing, emphasized clean code practices with reusable components and modular architecture, and deployed the project using Firebase Hosting.',
      link: 'https://chart-sample-d8524.web.app/',
      image: 'https://imgur.com/5fPKVd0.png',// Add your image URL or path here
      isZoomed: false
    },

    {

      name: '4) Weather Project',
      description: 'Designed and developed a responsive standalone Weather App using Angular 17+, showcasing real-time weather data for any city using the OpenWeatherMap API. The app is built using modern Angular features such as standalone components, provideHttpClient(), and functional API-based bootstrapping.',
     //https://weather-app-fc399.web.app/
      //link: 'https://github.com/shikha061987/weather-app',
      link: 'https://weather-app-fc399.web.app/',

      image: 'https://imgur.com/6i5cRvY.png',// Add your image URL or path here
      isZoomed: false


    },

     {

      name: '5) OpenStreet Map Integration Project',
      description: 'Developed an interactive map application with selected brand location from dropdown list using Angular and Leaflet.js for real-time location visualization.',
      link: 'https://github.com/shikha061987/Open-Street-Map',
      image: 'https://i.imgur.com/HTIEdoX.png',// Add your image URL or path here
      isZoomed: false


    },

    {
      name: '6) Grocery List Management Application',
      description: 'Developed a dynamic, user-friendly web application to manage and organize grocery shopping lists. The application allows users to create, update, and delete grocery items. Data is integated with mock apis.This project focused on enhancing user experience through an intuitive interface and employing best practices in Angular development.',
      link: 'https://github.com/shikha061987/grocery-list',
      image: 'https://i.imgur.com/HJFvhaP.png',// Add your image URL or path here
      isZoomed: false


    },
    {
      name: '7) User Login Authentication Application',
      description: 'Developed a user authentication website using Angular, integrating various features such as login, cotact information,about us,students details,books details, and session management.	Implemented form validation and error handling for login to improve user experience and reduce errors.',
      link: 'https://github.com/shikha061987/login-auth-guard',
      image: 'https://i.imgur.com/e36ewxy.png',// Add your image URL or path here
      isZoomed: false


    }
  ];
}
