import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, // Default route
    { path: 'about', component: AboutComponent  , title: 'about'  },
    { path: 'projects', component: ProjectsComponent , title: 'projects'  },
    { path: 'contact', component: ContactComponent , title: 'contact' },
    { path: 'certificates', component: CertificatesComponent , title: 'certificates' },
];
