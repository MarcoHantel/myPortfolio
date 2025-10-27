import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{

  constructor(public langSvc: LanguageService) {} // changeLanguage() muss in den service rein!!

  activeLang: boolean = false;
  language: string = "";
  sticky: boolean = false;

  // changeLanguage() muss in den service rein!!
  // changeLanguage(activeLang: boolean, language: string){
  // activeLang = true; 
  // console.log("Language changed" + activeLang + language);
// }
changeLanguage(){
  
}

}
