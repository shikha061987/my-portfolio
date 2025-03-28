import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './component/contact/contact.component';
import { SkillsComponent } from './component/skills/skills.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CertificatesComponent } from "./component/certificates/certificates.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContactComponent, SkillsComponent, AboutComponent, ProjectsComponent, CertificatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
