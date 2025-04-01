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
      name: '🎓 Angular Certification (Sahosofttech, 2024)',
      description: 'Advanced knowledge of Angular development, component-based architecture, and RxJS.',
     image: 'https://i.imgur.com/GdhkNtM.jpg', // Replace with actual URL
      isZoomed: false

    },
    {
      name: '🎓 TypeScript Certification (Sahosofttech, 2024)',
      description: 'Strong understanding of TypeScript, type safety, and object-oriented programming concepts.',
      image: 'https://i.imgur.com/4kJ6u4h.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name:'🤝 ESl Conversation Club Management Officer (Volunteer) - Lanier Technical College',
      image: 'https://i.imgur.com/qGPqADV.jpg', // Add your image URL or path here
      isZoomed: false

    },

    {
      name:'🏆 Award for Performer of the Month in Development',
      image: 'https://i.imgur.com/eAH4kEQ.jpg', // Add your image URL or path here
      isZoomed: false

    },

    {
      name:'🎓 Master of Computer Application Certificate',
      image: 'https://i.imgur.com/gbjgZhE.jpg', // Add your image URL or path here
      isZoomed: false

    }

  ];

  ngOnInit(): void {
    console.log(`Component initialized: ${this.certicatesArr[0].image}`);
  }
}
