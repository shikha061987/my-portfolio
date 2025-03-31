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
     
      //image: '/Certificate.jpg' ,// Correct path
     // image: 'https://drive.google.com/uc?id=0B7poT3YZUOfEdTRETHBucGQxc0U',
     image: 'https://i.imgur.com/GdhkNtM.jpg', // Replace with actual URL


      //https://i.imgur.com/iwzAO4n.png
      isZoomed: false

    },
    {
      name: 'TypeScript Certification (Sahosofttech, 2024)',
      description: 'Strong understanding of TypeScript, type safety, and object-oriented programming concepts.',
      image: 'https://i.imgur.com/4kJ6u4h.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name:'ESl Conversation Club Management Officer (Volunteer) - Lanier Technical College',
      image: 'https://i.imgur.com/qGPqADV.jpg', // Add your image URL or path here
      isZoomed: false

    }

  ];

  ngOnInit(): void {
    console.log(`Component initialized: ${this.certicatesArr[0].image}`);
  }
}

