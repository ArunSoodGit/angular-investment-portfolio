import {Routes} from '@angular/router';
import {PortfolioListPageComponent} from './features/portfolio/portfolio-list-page-component/portfolio-list-page-component';
import {SettingsComponent} from './features/settings/settings-component/settings-component';
import {StatisticsComponent} from './features/statistics/statistics-component/statistics-component';
import {
  PortfolioDetailPage
} from './features/portfolio/portfolio-details-page-component/portfolio-detail-page-component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "portfolio",
    pathMatch: "full",
  },
  {
    path: "portfolio",
    component: PortfolioListPageComponent,
    title: "Portfel",
  },
  {
    path: "portfolio/:id",
    component: PortfolioDetailPage
  },
  {
    path: "settings",
    component: SettingsComponent,
    title: "Ustawienia",
  },
  {
    path: "statistics",
    component: StatisticsComponent,
    title: "Statystyki",
  },
  {
    path: "**",
    redirectTo: "portfolio",
  },
];
