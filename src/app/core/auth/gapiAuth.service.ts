import { Injectable } from '@angular/core';

declare const gapi: any;

interface GapiConfig {
  apiKey: string;
  discoveryDocs: string[];
  client_id: string;
  scope: string;
}

@Injectable({
  providedIn: 'root'
})
export class GapiAuthService {
  // @ts-ignore
  googleAuth: gapi.auth2.GoogleAuth;
  constructor() {}

  initClient(config: GapiConfig) {
    return new Promise((resolve, reject) => {
      gapi.load('client:auth2', () => {
        return gapi.client
          .init(config)
          .then(() => {
            this.googleAuth = gapi.auth2.getAuthInstance();
            resolve();
          })
          .catch(reject);
      });
    });
  }

  get isSignedIn(): boolean {
    return this.googleAuth.isSignedIn.get();
  }

  get currentUser() {
    return this.googleAuth.currentUser.get();
  }

  signIn(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.googleAuth
        .signIn()
        .then(googleUser => resolve(googleUser.getBasicProfile()))
        .catch(err => reject(err));
    });
  }

  signOut(): void {
    this.googleAuth.signOut();
  }

  getFiles(): Promise<any> {
    return gapi.client.drive.files.list();
  }
}
