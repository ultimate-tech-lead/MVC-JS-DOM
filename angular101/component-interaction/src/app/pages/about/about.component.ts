import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AboutState } from './types';
import { AboutService } from './about.service';
import { Observable } from 'rxjs';
import {ICallback} from '../../model/PrimerObservable'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements ICallback {
  state: AboutState;
  state$: Observable<AboutState>;
  brojZaState = 1;

  // aboutService: AboutService;
  // isto kao da sam stavio private u const

  onValueChanged(novaVrednost: number) {
    alert('stigla nova vrednost' + novaVrednost);
    this.brojZaState = novaVrednost;
  }
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

    this.aboutService.primer.subscribe(this);
  }

  registerUser() {
    this.aboutService.register();
    this.aboutService.primer.promeniVrednost(this.brojZaState + 1);
  }
}
