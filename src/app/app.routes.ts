import { Routes } from '@angular/router';
import {PortfolioPageComponent} from './portfolio/portfolio-page-component/portfolio-page-component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "portfolio",
    pathMatch: "full",
  },
  {
    path: "portfolio",
    component: PortfolioPageComponent,
    title: "Portfel"
  },
  {
    path: "**",
    redirectTo: "portfolio",
  },
];
