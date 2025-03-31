import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    
    {
    degree: "🎓Master of Computer Applications (MCA)",
    institution: "UPTU University",
    location: "Muzaffarnagar,India",
   
  },
  {
    degree: "🎓Bachelor of Computer Application (Bsc)",
    institution: "CCS University ",
    location: "Muzaffarnagar,India",
   
  },
  {
    degree: "🎓 High School Diploma",
    institution: "UPBoard",
    location: "Muzaffarnagar,India",
   
  },
  {
    degree: "🎓 Secondary School Certificate ",
    institution: "UPBoard",
    location: "Muzaffarnagar,India",
   
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