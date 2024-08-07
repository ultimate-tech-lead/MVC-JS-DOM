import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import {ICallback} from '../../model/PrimerObservable'

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./about.component.scss'],
})
export class InfoCardComponent implements ICallback {
  brojZaState = 1;

  onValueChanged(novaVrednost: number) {
    alert('stigla nova vrednost (Info komponenta)' + novaVrednost);
    this.brojZaState = novaVrednost;
  }

  constructor(private aboutService: AboutService) {
    this.aboutService.primer.subscribe(this);
  }
}