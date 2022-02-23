import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {PageState} from "../../types/page-state";
import {Option} from "./Option";
import {MENU_OPTIONS} from "./menu-options";
import {animate, style, transition, trigger} from "@angular/animations";
import {Auth} from "aws-amplify";


@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss'],
  animations: [
    trigger('fadein', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class DropMenuComponent implements OnInit {
  menuOpts: Option[] = MENU_OPTIONS
  pageState = PageState;
  shown: boolean = true;
  loggedin: boolean = false;

  constructor(private websiteState: WebsiteStateService) {
    websiteState.loggedIn$.subscribe(state=>{
      this.loggedin = state;
      this.shown = false;
    })
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.shown = !this.shown;
  }

  onClickOption(option: Option): void {
    if(option.state == PageState.LOGOUT){
      Auth.signOut().catch(err=>{
        console.log(err);
      })
    } else {
      this.websiteState.changeWebsiteState(option.state);
    }
  }

}
