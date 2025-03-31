import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [NgFor,NgIf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  isZoomed: boolean = false;

 
 /* toggleZoom(certificate: any): void {
   // debugger;
    console.log("Before this.isZoomed " + certificate.isZoomed);
    certificate.isZoomed = !certificate.isZoomed;
        console.log("After this.isZoomed " + certificate.isZoomed);



  }*/

  zoomedImage: string | null = null; // Stores the zoomed image

  toggleZoom(imageUrl?: string): void {

    this.zoomedImage = imageUrl || null;
    console.log("After this.isZoomed " + this.zoomedImage);
    console.log("URL isZoomed " + imageUrl);
  }
  certicatesArr = [
    {
      name: 'Angular Certification (Sahosofttech, 2024)',
      description: 'Advanced knowledge of Angular development, component-based architecture, and RxJS.',
      image: '/Certificate.jpg' ,// Add your image URL or path here
      isZoomed: false


    },
    {
      name: 'TypeScript Certification (Sahosofttech, 2024)',
      description: 'Strong understanding of TypeScript, type safety, and object-oriented programming concepts.',
      image: '/Certificate-TypeScript.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name:'ESl Conversation Club Management Officer (Volunteer) - Lanier Technical College',
      image: '/Lanier.jpeg', // Add your image URL or path here
      isZoomed: false



    }
  ];

 
}
