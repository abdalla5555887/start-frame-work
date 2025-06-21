import { Protofilio } from './protofilio/protofilio';
import { Component } from '@angular/core';
import { Alarmes } from './alarmes/alarmes';
import { Conect } from './conect/conect';
import { Home } from './home/home';
import { Routes } from '@angular/router';
import { About } from './about/about';

export const routes: Routes = [

{path:'', component:Home, title:'Home'},
{path:'home', component:Home, title:'Home'},
{path:'conect',component:Conect, title:'Conect'},
{path:'protofilio',component:Protofilio, title:'protofilio'},
{path:'about',component:About, title:'about'},
{path:'conect',component:Conect, title:'Conect'},
{path:'**', component:Alarmes, title:'Noway'},

];
