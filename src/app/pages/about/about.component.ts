import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile = 
    {
      name: 'Shikha Rawat ',
      title:'Front-End Developer | Angular Specialist',
      description: 'Angular (v14+), TypeScript, JavaScript, HTML5, CSS3',
      backendtechnologies:'Node.js, Express.js (basic understanding)',

      uiLibraries:'Angular Material, Bootstrap, Tailwind CSS',
      stateManagement:'RxJS, NgRx ',
      apiIntegration: 'RESTful APIs, JSON, HTTPClientModule, Interceptors, GraphQL',

      testingTool:'Jasmine, Karma (Unit Testing)',
      developmentTools: 'Visual Studio Code, Chrome DevTools',
      versionControlCD:'Git, GitHub, GitLab, CI/CD basics (GitHub Actions, Jenkins)',
      authentication:'JSON Web Token, Auth0, Angular Route AuthGaurds',
      deploy:'Firebase, Githu',
      /*Design & UI/UX:Basic knowledge of visual design, wireframing, prototyping with tools Figma, canva*/
design:'Basic knowledge of visual design, wireframing, prototyping with tools Figma, canva',


      gender: 'Female',
      nationality: 'Indian',
      location: 'Cumming, GA',
      githublink: 'https://github.com/shikha061987', 
      portfoliolink: 'https://shikha061987.github.io/my-portfolio',

    LinkedIn: 'https://www.linkedin.com/in/shikha-rawat-33591a307/' 
  

      


    }
}
