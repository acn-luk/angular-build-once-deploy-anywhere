import { Component, VERSION } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  env: String;
  apiUrl: String;

  constructor(configService: ConfigService) {
    this.apiUrl = configService.config.get('apiUrl');
    this.env = configService.config.get('env');
  }
}
