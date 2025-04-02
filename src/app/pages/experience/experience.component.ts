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
      name: 'ESL Conversation Club Management Officer in Lanier Tech College',
      postion: 'Volunteer',
      timeDuration: '2024 - Present',
      location: 'Cumming, Georgia, USA'

    },

    {
      name: 'Liquidhub India Private Limited',
      postion: 'Software Engineer',
      timeDuration: '2013 - 2014',
      location: 'Mumbai, Maharashtra, India'


    },
    {
      name: 'Classic Informatics Private Limited',
      postion: 'Software Engineer',
      timeDuration: '2011 -  2013',
      location: 'Saidulajab, New Delhi, India'


    },
    {
      name: '4 C Plus (Internet) Co. Limited',
      postion: 'Software Developer',
      timeDuration: '2010- 2011',
      location: 'Mayur Vihar, New Delhi, India'


    },
   
  ];
}

