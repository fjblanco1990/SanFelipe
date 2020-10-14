import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../Components/layout/layout.component';


const appRoutes: Routes = [
    { path: '', component: LayoutComponent },
    { path: '*', component: AppComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);