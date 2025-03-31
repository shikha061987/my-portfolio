import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  profile = 
    {
      name: 'Shikha Rawat',
      description: 'Angular Front End Developer',
      gender: 'Female',
      nationality: 'Indian',
      location: 'Cumming, GA',
      githublink: 'https://github.com/shikha061987', 
      portfoliolink: 'https://shikha061987.github.io/my-portfolio',

    LinkedIn: 'https://www.linkedin.com/in/shikha-rawat-33591a307/' 
  

      


    }
}
