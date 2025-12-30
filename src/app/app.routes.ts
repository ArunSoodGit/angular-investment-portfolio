import {Routes} from '@angular/router';
import {PortfolioListComponent} from './portfolio/portfolio-list-component/portfolio-list-component';
import {PortfolioPageComponent} from './portfolio/portfolio-page-component/portfolio-page-component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "portfolio",
    pathMatch: "full",
  },
  {
    path: "portfolio",
    component: PortfolioListComponent,
    title: "Portfel",
  },
  {
    path: "portfolio/:id",
    component: PortfolioPageComponent
  },

  {
    path: "**",
    redirectTo: "portfolio",
  },
];
