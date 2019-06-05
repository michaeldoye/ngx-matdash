import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}
  storageValue$: ReplaySubject<any> = new ReplaySubject<any>();

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      this.storageValue$.next(JSON.parse(localStorage.getItem(key)));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      this.storageValue$.next(JSON.parse(localStorage.getItem(key)));
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  clearAll() {
    try {
      localStorage.clear();
      this.storageValue$.next(null);
    } catch (e) {
      console.error('Error clearing data from localStorage', e);
    }
  }

}

