import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: 'Rate Management System';
  isAuthenticated: boolean;

  constructor(private oktaAuthService: OktaAuthService) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
    this.oktaAuthService.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }
}
