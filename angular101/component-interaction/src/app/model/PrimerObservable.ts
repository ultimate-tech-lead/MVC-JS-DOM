export interface ICallback {
  onValueChanged: (novaVrednost: number) => void;
}

export class PrimerObservable {
  listaSubscribera: ICallback[] = [];
  mojaVrednost: number;

  subscribe(observer: ICallback) {
    this.listaSubscribera.push(observer);
  }

  promeniVrednost(novaVrednost: number) {
    this.mojaVrednost = novaVrednost;
    for (const observer of this.listaSubscribera) {
      observer.onValueChanged(this.mojaVrednost);
    }
  }
}
