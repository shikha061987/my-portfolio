import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, // Default route
    { path: 'about', component: AboutComponent  , title: 'about'  },
    { path: 'experience', component: ExperienceComponent  , title: 'experience'  },
    { path: 'education', component: EducationComponent  , title: 'education' },
    { path: 'projects', component: ProjectsComponent , title: 'projects'  },
    { path: 'contact', component: ContactComponent , title: 'contact' },
    { path: 'certificates', component: CertificatesComponent , title: 'certificates' },
];
