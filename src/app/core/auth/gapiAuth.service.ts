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
  private googleAuth: gapi.auth2.GoogleAuth;
  private googleSheets: any;
  private googleDrive: any;

  public initClient(config: GapiConfig) {
    return new Promise((resolve, reject) => {
      gapi.load('client:auth2', () => {
        return gapi.client
          .init(config)
          .then(() => {
            this.googleAuth = gapi.auth2.getAuthInstance();
            this.googleSheets = gapi.client.sheets;
            this.googleDrive = gapi.client.drive;
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

  public signIn(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.googleAuth
        .signIn()
        .then(googleUser => resolve(googleUser.getBasicProfile()))
        .catch(err => reject(err));
    });
  }

  public signOut(): void {
    this.googleAuth.signOut();
  }

  public getFiles(): Promise<any> {
    return this.googleDrive.files.list();
  }

  public getFile(spreadsheetId: string, range: string): Promise<any> {
    return this.googleSheets.spreadsheets.values.get({ spreadsheetId, range });
  }
}
