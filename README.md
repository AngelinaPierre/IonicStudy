# Resume Tutorial - Add Loading Controller in Ionic 6 Angular

- `Step 1:` Getting Started
- `Step 2:` Build Loader Service
- `Step 3:` Import Loading Controller
- `Step 4:` Display Simple Loader
- `Step 5:` Dismiss or Hide Loader
- `Step 6:` Create Auto Hide Show Loader
- `Step 7:` Customize Loader Component
- `Step 8:` Add Loader Service in Ionic Page
- `Step 9:` Run Ionic App

<br>

[Link of the tutorial - positronx.io](https://www.positronx.io/ionic-loading-controller-tutorial-with-ion-loading-example/?msclkid=2ebb2dd1d14511ec9106d5e2a7d1377d)

<br>

## Build Loader Service

<br>

It is always a good practice to make the code reusable, so it is good to take the help of angular service to create a loading component, and after that, it will be available throughout the application.

~~~
ionic generate service ionLoader
~~~

<br>

## Import Loading Controller

<br>

After generating the ionLoader service file, open the `ion-loader.service.ts` file and import LoadingController from '@ionic/angular' package and inject into the `Constructor()` method.

~~~
import {Injectable} from '@angular/core';
import { LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class IonLoaderService {
    constructor(
        public loadingController: LoadingController
    ) { }
}
~~~

<br>

The loadingController allows access to various properties, methods, and events to display loaders in the ionic app.

## Display Simple Loader

<br>

The create method allows displaying or creating the loader in conjuction with the Promise object. Moreover, this loader will display for the boundless duration.

Place code in `ion-loader.service.ts` file.

~~~
// simple loader
simpleLoader() {
    this.loadingController.create({
        message: 'Loading...'
    }).then(
        (response) =>{
            response.present();
        }
    );
}
~~~

<br>

## Dismiss or Hide Loader

<br>

You need to call the `dismiss()` method to dismiss the loading overlay after is has been invoked; it returns the promise object.

Place the code in `ion-loader.service.ts` file.

~~~
// dismiss loader
dismissLoader(){
    this.loadingController.dismiss().then(
        (response) => {
            console.log('Loader closed!', response);
        }
    ).catch(
        (err) => {
            console.log('Error occured: ', err);
        }
    );
}
~~~

<br>

## Create Auto Hide Show Loader

<br>

We need to create a basic loader, which will display on the screen for 4 seconds and hide after 4 seconds. You need to access `create()` method, define loader display duration. Within the then response call `present()` and `onDidDismiss()` method to dismiss the ionic loader.

Place the code in `ion-loader.service.ts` file

~~~
// auto hide show loader
autoLoader(){
    this.loadingController.create({
        message: 'Loader hides after 4 seconds',
        duration: 4000
    }).then(
        (response) => {
            response.present();
            response.onDidDismiss().then(
                (response) => {
                    console.log('Loader dismissed', response);
                }
            );
        }
    );
}
~~~

<br>

## Customize Loader Component

<br>

This step explains how to add custom styling in loader and how to dismiss loader when clicked or tapped on the screen; you need to set backdropDismiss to true and a class property and pass the class name to it within the create method.

~~~
// custom style + hide on tap loader
customLoader(){
    this.loadingController.create({
        message: 'Loader with custom style',
        duration: 4000,
        cssClass: 'loader-css-class',
        backdropDismiss: true,
    }).then(
        (res) => {
            res.present();
        }
    )
}
~~~

<br>

Let's us conjugate all the custom methods to display or hide the loader in ion loader service class, update the final code in `ion-loader.service.ts` file.


~~~
import { Injectable} from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class IonLoaderService{
    constructor(public loadingController: LoadingController) { }

    // Simple loader
    simpleLoader(){
        this.loadingController.create({
            message: 'Loading...'
        }).then(
            (response) => {
                response.present();
            }
        )
    }

    // Dismiss loader
    dismissLoader(){
        this.loadingController.dismiss().then(
            (response) => {
                console.log('Loader closed!', response);
            }
        ).catch(
            (err) => {
                console.log("Error occured: ', err);
            }
        );
    }

    // Auto hide show Loader
    autoLoader(){
        this.loadingController.create({
            message: 'Loader hides after 4 seconds',
            duration: 4000
        }).then(
            (response) => {
                response.present();
                response.onDidDismiss().then(
                    (response) => {
                        console.log('Loader dismissed', response);
                    }
                );
            }
        );
    }

    // Custom Style + hide on tap loader
    customLoader(){
        this.LoadingController.create({
            message: 'Loader with custom style',
            duration: 4000,
            cssClass: 'loader-css-class',
            backdropDismiss: true,
        }).then(
            (res) => {
                res.present();
            }
        );
    }
}
~~~

<br>

## Add Loader Service in Ionic Page

<br>

In this step, we have to use IonLoaderService to show Loaders in the ionic home page component, import the IonLoaderService inject in the constructor. We have created thre functions to call the autoLoader(), simpleLoader() and dismissLoader() methods.

Place the code in `home.page.ts` file.

~~~
import { Component } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage{
    constructor(private ionLoaderService: IonLoaderService) {}

    displayAutoLoader(){
        this.ionLoaderService.autoLoader();
    }
    showLoader(){
        this.ionLoaderService.simpleLoader();
    }
    hideLoader(){
        this.ionLoaderService.dismissLoader();
    }
    customizeLoader(){
        this.ionLoaderService.customLoader();
    }
}
~~~

<br>

In the HTML page, define four buttons bind those functions with a click event to call the loader indicator or spinner.

Place the code in `home.page.html` file.

~~~
<ion-header [translucent]="true">
    <ion-toolbar>
        <ion-title>Ionic Loader Examples</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content>
    <ion-button
        (click)="displayAutoLoader()"
        color="primary"
        expand="block"
    >Show auto Loader</ion-button>
    <ion-button
        (click)="showLoader()"
        color="success"
        expand="block"
    >Display Loader</ion-button>
    <ion-button
        (click)="hideLoader()"
        color="danger"
        expand="block"
    >Close Loader</ion-button>
    <ion-button
        (click)="customizeLoader()"
        color="light"
        expand="block"
    >Show Customized Loader</ion-button>
</ion-content>
~~~

<br>

Insert the code in `global.scss` file

~~~
.loader-css-class{
    --background: #261bff;
    --spinner-color: #ffffff;
}
~~~

<br>

## Run Ionic App

<br>

You can start the app with the help of ionic lab package.

~~~
npm i @ionic/lab --save-dev
~~~

<br>

Run app on the emulators:

~~~
ionic serve -l
~~~


























