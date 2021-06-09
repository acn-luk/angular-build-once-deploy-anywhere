import { Injectable } from '@angular/core';

export enum Environment {
  Local = 'localhost',
  Dev = 'angular-build-once-deploy-anywhere.stackblitz.io',
  Prod = 'angular-build-once-deploy-anywhere.prod.stackblitz.io'
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {}
  config = new Map();

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const hostname = window && window.location && window.location.hostname;

      console.log('Hostname: ' + hostname);

      switch (hostname) {
        case Environment.Prod: {
          this.config.set('env', 'Prod');
          this.config.set('apiUrl', 'https://prod.com/api');
          break;
        }
        case Environment.Dev: {
          this.config.set('env', 'Dev');
          this.config.set('apiUrl', 'https://dev.com/api');
          break;
        }
        default: {
          this.config.set('env', 'Local');
          this.config.set('apiUrl', 'https://localhost:8080/api');
          break;
        }
      }

      console.log('Environment: ' + this.config.get('env'));
      resolve(this.config);
    });
  }
}
