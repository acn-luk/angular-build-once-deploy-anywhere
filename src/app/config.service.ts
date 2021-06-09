import { Injectable } from '@angular/core';

export enum Environment {
  Local = 'localhost',
  Dev = 'angular-build-once-deploy-anywhere.stackblitz.io',
  Test = 'angular-build-once-deploy-anywhere.test.stackblitz.io',
  Prod = 'angular-build-once-deploy-anywhere.prod.stackblitz.io'
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {}
  env;
  apiUrl;

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const hostname = window && window.location && window.location.hostname;

      console.log(hostname);

      switch (hostname) {
        case Environment.Prod: {
          this.env = 'Prod';
          this.apiUrl = 'https://prod.com/api';
          break;
        }
        case Environment.Dev: {
          this.env = 'Dev';
          this.apiUrl = 'https://dev.com/api';
          console.log('Dev');
          break;
        }
        default: {
          this.env = 'Local';
          this.apiUrl = 'http://localhost:8080/api';
          break;
        }
      }

      console.log('Environment: ' + this.env);
      resolve(this.apiUrl);
    });
  }
}
