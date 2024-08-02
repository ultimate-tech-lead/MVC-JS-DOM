import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AboutState } from './types';
import { AboutService } from './about.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  state: AboutState;
  state$: Observable<AboutState>;

  // aboutService: AboutService;
  // isto kao da sam stavio private u const

  constructor(private aboutService: AboutService) {
    // this.aboutService = aboutService;
    // this.state = {
    //   title: 'About title',
    //   vrednost: 10,
    // };
    this.state$ = this.aboutService.aboutState$;
    this.state = this.aboutService.getAboutStateSync();
    const x = {
      polje: 'vrednost',
    };
  }

  registerUser() {
    this.aboutService.register();
  }
}
