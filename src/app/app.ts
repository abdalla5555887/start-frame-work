import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Conect } from "./conect/conect";
import { About } from "./about/about";
import { Protofilio } from "./protofilio/protofilio";
import { Footer } from "./footer/footer";
import { Nave } from "./nave/nave";
import path from 'path';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Conect, About, Protofilio, Footer, Nave],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'startframework';

}
