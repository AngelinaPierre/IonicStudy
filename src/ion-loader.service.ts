import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  // The LoadingController allows access to various properties, methods, and events to display loaders in the ionic app
  constructor(public loadingController: LoadingController) { }

  // simple loader
  simpleLoader(){
    this.loadingController.create({
      message: 'Loading...',
      backdropDismiss:true, // clicar fora do loader faz ele desaparecer
    }).then(
      (response) => {
        response.present();
      }
    )
  }

  //dismiss loader
  dismissLoader(){
    this.loadingController.dismiss().then(
      (response) => {
        console.log('Loader closed!', response);
      }
    ).catch(
      (err) => {
        console.log('Error occured', err);
      }
    );
  }

  //Auto hide show Loader
  autoLoader(){
    this.loadingController.create({
      message:'Loader hides after 4 seconds',
      duration: 4000,
    }).then(
      (response) => {
        response.present();
        response.onDidDismiss().then(
          (response) => {
            console.log('Loader dismissed', response);
          }
        )
      }
    )
  }

  // Custom style + hide on tap loader
  customLoader(){
    this.loadingController.create({
      message:'Loader with custom style',
      duration:4000,
      cssClass: 'loader-css-class',
      backdropDismiss:true,
    }).then(
      (res) => {
        res.present();
      }
    )
  }





}
