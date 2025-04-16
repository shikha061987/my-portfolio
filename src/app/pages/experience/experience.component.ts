import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 

  companyExperience = [
    
    {
      name: 'Front-End Angular Developer',
      position: 'Self-Employee',
      timeDuration: '2024 - Present',
      location: 'Cumming, Georgia, USA'

    },
    {
      name: 'ESL Conversation Club Management Officer in Lanier Tech College',
      position: 'Volunteer',
      timeDuration: '2023 - Present',
      location: 'Cumming, Georgia, USA'

    },

    {
      name: 'Liquidhub India Private Limited',
      position: 'Software Engineer',
      timeDuration: '2013 - 2014',
      location: 'Mumbai, Maharashtra, India'


    },
    {
      name: 'Classic Informatics Private Limited',
      position: 'Software Engineer',
      timeDuration: '2011 -  2013',
      location: 'Saidulajab, New Delhi, India'


    },
    {
      name: '4 C Plus (Internet) Co. Limited',
      position: 'Software Developer',
      timeDuration: '2010- 2011',
      location: 'Mayur Vihar, New Delhi, India'


    },
   
  ];
}

