import { Component } from '@angular/core';
import { IonLoaderService } from 'src/ion-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private ionLoaderService: IonLoaderService
  ) {}

  displayAutoLoader(){
    this.ionLoaderService.autoLoader();
  }

  showLoader(){
    this.ionLoaderService.simpleLoader();
  }

  hideLoader(){
    this.ionLoaderService.dismissLoader();
  }

  customizeLoader() {
    this.ionLoaderService.customLoader();
  }
}
