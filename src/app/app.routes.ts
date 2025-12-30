import {Routes} from '@angular/router';
import {PortfolioListComponent} from './features/portfolio/portfolio-list-component/portfolio-list-component';
import {PortfolioDetailComponent} from './features/portfolio/portfolio-details-component/portfolio-detail-component';
import {SettingsComponent} from './features/settings/settings-component/settings-component';
import {StatisticsComponent} from './features/statistics/statistics-component/statistics-component';

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
    component: PortfolioDetailComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "statistics",
    component: StatisticsComponent
  },
  {
    path: "**",
    redirectTo: "portfolio",
  },
];
