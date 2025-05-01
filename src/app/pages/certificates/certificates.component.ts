import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [NgIf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
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
      name: '🎓 CSS Certification (Hackerrank)',
      description: 'Strong understanding of CSS, including layout and responsive design,Skilled in CSS for styling, flexbox, and grid layouts and modern design techniques.',
      image: 'https://imgur.com/FA9qjAc.jpg', // Add your image URL or path here
      isZoomed: false

    },

    //https://imgur.com/kG8L9aI

    {
      name: '🎓 Web Development Fundamentals (IBM SkillsBuild)',
      description: 'Strong understanding of web development tools, coding standards,user experience fundamentals, and gaining practical skills in HTML, CSS, JavaScript, and responsive web design.',
      image: 'https://imgur.com/kG8L9aI.jpg', // Add your image URL or path here
      isZoomed: false

    },

    //https://imgur.com/uaTpKTR
    {
      name: '🎓 Certified Web Accessibility Specialist',
      description: 'Certified Web Accessibility Specialist (CWAS), skilled in implementing WCAG-compliant UI using semantic HTML, ARIA, and modern front-end practices. Committed to creating inclusive, high-performance web experiences across all devices and assistive technologies.',
      image: 'https://imgur.com/uaTpKTR.jpg', // Add your image URL or path here
      isZoomed: false

    },

     {
      name: '🎓 JavaScript Certification (Simplilearn SkillUp)',
      description: 'Strong understanding of JavaScript with knowledge of functions, events, and async operations.',
      image: 'https://imgur.com/1Jo8Clw.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name: '🎓 Angular Certification (Sahosofttech)',
      description: 'Advanced knowledge of Angular development, component-based architecture, and RxJS.',
     image: 'https://i.imgur.com/GdhkNtM.jpg', // Replace with actual URL
      isZoomed: false

    },
  

    {
      name: '🎓 TypeScript Certification (Sahosofttech)',
      description: 'Strong understanding of TypeScript, type safety, and object-oriented programming concepts.',
      image: 'https://i.imgur.com/4kJ6u4h.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name: '🎓 Git/GitHub Certification (Simplilearn SkillUp)',
      description: 'Strong proficiency in version control using Git and GitHub, including repository management, branching and merging, resolving conflicts, collaborative workflows (e.g., Git Flow), pull requests, and issue tracking. Gained hands-on experience with open-source contribution practices and CI/CD integration basics.',
      image: 'https://imgur.com/cUWpB3q.png', // Add your image URL or path here
      isZoomed: false

    },
  
    {
      name: '🎓 JavaScript Certification (Hackerrank)',
      description: 'Strong understanding of JavaScript with knowledge of functions, events, and async operations.',
      image: 'https://imgur.com/XhfgA4i.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name: '🎓 Graphic Design and UI/UX Design Certification (Simplilearn SkillUp)',
      description: 'knowledge of visual design principles, color theory, layout design, wireframing, and prototyping using tools such as Figma and Adobe XD',
      image: 'https://imgur.com/zNQcex2.jpg', // Add your image URL or path here
      isZoomed: false

    },
    

    {
      name:'🏆 Award for Performer of the Month in Development',
      image: 'https://i.imgur.com/eAH4kEQ.jpg', // Add your image URL or path here
      isZoomed: false

    },
    {
      name:'🤝 ESl Conversation Club Management Officer (Volunteer) - Lanier Technical College',
      image: 'https://i.imgur.com/qGPqADV.jpg', // Add your image URL or path here
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
