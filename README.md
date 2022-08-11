# Ngweb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



ng g m modules/auth --routing=true
ng g m modules/admin --routing=true
ng g m modules/communication --routing=true
ng g m modules/maintenance --routing=true
ng g m modules/user --routing=true


ng g m modules/layout
ng g c modules/layout/auth --module=layout
ng g c modules/layout/main --module=layout
ng g c modules/layout/main/left-navigation --module=layout


ng generate @angular/material:navigation modules/layout/main/left-navigation --module=layout




ng g m modules/form-builder --routing=true
ng g c modules/form-builder/form --module=form-builder
ng g c modules/form-builder/builder --module=form-builder
ng g c modules/form-builder/field/field-file --module=field


ng g m modules/form-builder/builder --routing=true
ng g m modules/form-builder/field --routing=true
ng g c modules/form-builder/field/field-file --module=field
ng g c modules/form-builder/field/field-input --module=field
