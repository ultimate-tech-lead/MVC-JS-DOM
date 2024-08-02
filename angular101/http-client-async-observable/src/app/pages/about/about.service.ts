// src/app/services/about.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AboutState } from './types';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private readonly initialState: AboutState = {
    title: 'Initial Title',
    vrednost: 10,
    odgovorOdServera: '[nema odgovora]',
  };

  // BehaviorSubject for the AboutState
  private readonly _aboutState$ = new BehaviorSubject<AboutState>(
    this.initialState
  );

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Readonly public observable
  public readonly aboutState$ = this._aboutState$.asObservable();

  // Method to get AboutState synchronously
  getAboutStateSync(): AboutState {
    return this._aboutState$.getValue();
  }

  // Method to get AboutState via a Promise
  getAboutStateAsync(): Promise<AboutState> {
    return Promise.resolve(this.getAboutStateSync());
  }

  // Optional: Method to update the AboutState
  // .next svima koji cekaju na observable ili
  // SLUSAJU (zasto sto nie cekaju samo jednom nego koliko god puta)
  updateAboutState(newState: AboutState): void {
    this._aboutState$.next(newState);
  }

  async register(): Promise<void> {
    const url = 'https://xxxx.ngrok-free.app/users/register';
    const payload = {
      username: 'ANGULAR16',
      password: 'ANGULAR16',
      email: 'test2@admin.edu',
      phone: '+1234567890',
      name: 'John Doe',
    };

    try {
      const response = await this.http.post(url, payload).toPromise();
      const newState: AboutState = this.getAboutStateSync();
      newState.odgovorOdServera = JSON.stringify(response, null, 4);

      this.updateAboutState(newState);
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration error:', error);
    }
  }
}
