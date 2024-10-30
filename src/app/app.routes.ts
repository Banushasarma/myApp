import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';

export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'feature',
    loadComponent: () =>
      import('./feature/feature.component').then(
        (module) => module.FeatureComponent
      ),
  },
];
