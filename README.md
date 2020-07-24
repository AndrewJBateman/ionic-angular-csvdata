# :zap: Ionic Angular Explorer

* App to open a locally-stored Comma Separated Values (CSV) file and allow it to be modified and saved/shared via a social media plugin if using a mobile or as a xls file if using a PC. This is another great tutorial from [Simon Grimm of the IonicAcademy, Youtube video 'Ionic Native File Explorer'](https://www.youtube.com/watch?v=pDqG3iYDdM0&t=141s).

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Explorer](#zap-ionic-angular-explorer)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Includes 'export' button top left to save the file to social media etc.
* The **Cordova-plugin-file** plugin implements a File API allowing read/write access to files stored on the device.
* The **cordova-plugin-x-socialsharing** shares text, files, images and links via social networks, sms and email.

## :camera: Screenshots

![screenshot](./img/home_csv.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Ionic/angular v5](https://ionicframework.com/)
* [Angular v10](https://angular.io/)
* [cordova-plugin-file v6](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/)
* [cordova-plugin-x-socialsharing v5](https://ionicframework.com/docs/native/social-sharing)
* [mholt: Fast and powerful CSV (delimited text) parser - github link](https://github.com/mholt/PapaParse)
* [ngx-papaparse v3.0.4 (latest is 4.0.4)](https://github.com/alberthaff/ngx-papaparse) & [Albert Haff website](https://alberthaff.dk/projects/ngx-papaparse/docs/v3) - app only works with v 3.0.4

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* To start the server on a mobile using Ionic devapp and connected via wifi, type: 'ionic serve --devapp'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## :computer: Code Examples

* code from Cordova plugin to open a file on a mobile device file system with its default application

```typescript
// parse data asynchronously as per papa parse documentation.
this.papa.parse(csvData, {
    complete: parsedData => {
    this.headerRow = parsedData.data.splice(0, 1)[0];
    this.csvData = parsedData.data;
    console.log('data array: ', this.csvData);
    }
});
```

## :cool: Features

* cvs file access and editing.

## :clipboard: Status & To-do list

* Status: Code complete and working, tested using ionic server and Ionic devapp.
* To-do: nothing

## :clap: Inspiration

* [Simon Grimm IonicAcademy Youtube video 'Ionic Native File Explorer'](https://www.youtube.com/watch?v=tyZjicNtbyk)
* [Written version of tutorial from Devtactic website: How to Import & Export CSV Data using Papa Parse with Ionic](https://devdactic.com/csv-data-papa-parse-ionic/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
