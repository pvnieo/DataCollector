import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';

import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { VisualisationComponent } from './component/visualisation/visualisation.component';
import { FunnelComponent } from './component/visualisation/funnel/funnel.component';
import { SmartphoneTypeComponent } from './component/visualisation/smartphone-type/smartphone-type.component';
import { ScoreComponent } from './component/visualisation/score/score.component';
import { MessagerieCanalComponent } from './component/visualisation/messagerie-canal/messagerie-canal.component';
import { ConnexionEvolutionComponent } from './component/visualisation/connexion-evolution/connexion-evolution.component';
import { ActionComponent } from './component/action/action.component';
import { CleanComponent } from './component/action/clean/clean.component';
import { TaguerComponent } from './component/action/taguer/taguer.component';
import { Db1Component } from './component/home/db1/db1.component';
import { Db2Component } from './component/home/db2/db2.component';

import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'main', component: NavbarComponent, canActivate: [AuthguardGuard],
        children: [
            {path: 'home', component: HomeComponent,
                children: [
                    {path: 'db1', component: Db1Component},
                    {path: 'db2', component: Db2Component},
                ]
             },
            {path: 'vis', component: VisualisationComponent,
                children: [
                    {path: 'funnel', component: FunnelComponent},
                    {path: 'smartphonetype', component: SmartphoneTypeComponent},
                    {path: 'score', component: ScoreComponent},
                    {path: 'messagecanal', component: MessagerieCanalComponent},
                    {path: 'connexionevolution', component: ConnexionEvolutionComponent},
                ]
            },
            {path: 'action', component: ActionComponent,
                children: [
                    {path: 'clean', component: CleanComponent},
                    {path: 'taguer', component: TaguerComponent},
                ]
            },   
        ]
    },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],


})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    VisualisationComponent,
    FunnelComponent,
    SmartphoneTypeComponent,
    MessagerieCanalComponent,
    ConnexionEvolutionComponent,
    CleanComponent,
    TaguerComponent,
    ActionComponent,
    ScoreComponent,
    Db1Component,
    Db2Component,
];
    