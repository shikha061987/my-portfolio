import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = [
    
    {
    degree: " Master of Computer Applications (MCA)",
    University: "Gautam Buddh Technical University",
    school: "SD College of Management Studies",
    location: "Lucknow, Uttar Pardesh, India",
    YearofGraduation: "December 07, 2010"
    
   
  },
  {
    degree: " Bachelor of Computer Application (Bsc)",
    University: "Chaudhary Charan Singh University ",
    school: "SD College",
   location: "Meerut,India",
   YearofGraduation :"May, 2007"

   
  },
  {
    degree: " Secondary School Certificate ",
    University: "Uttar Pradesh State Board of Intermediate School ",
    school: "Saraswati Vidya Mandir ",
    location: "Muzaffarnagar,India",
    YearofGraduation :"March, 2004"
   

   
  },
  {
  
    degree: " High School Diploma",
    University: "Uttar Pradesh State Board of High School ",
    school: "Saraswati Vidya Mandir ",
    location: "Muzaffarnagar,India",
    YearofGraduation :"March, 2002"
   
  }
];
}





     /*                             

    <h4>🎓 Degree : Bachelor of Computer Application :  </h4>
    <p> CCS University </p><br/>
    <p >Location : Muzaffarnagar,India </p><br/>



    <h4>🎓 High School Diploma</h4>
    <p >University : UPBoard</p><br/>
    <p >Location : Muzaffarnagar,India </p><br/>




    <h4>🎓 Secondary School Certificate  </h4>
    <p >University : UPBoard</p><br/>
    <p >Location : Muzaffarnagar,India </p><br/>*/