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


--------------------------------------------------------------------------------------------------

npm install @capacitor/android
npx cap add android
npx cap open android

npx cap run android

--------------------------------------------------------------------------------------------------

ng g m modules/main --routing=true
ng g c modules/main/components/layout --module=main
ng g c modules/main/components/dashboard --module=main
ng g c modules/main/components/home --module=main
ng g c modules/main/components/setting --module=main
ng g c modules/main/components/help --module=main
ng g c modules/main/components/blank --module=main

ng g s modules/main/core/services/module

ng g s modules/user/services/conversation/conversation

--------------------------------------------------------------------------------------------------

ng g s shared/services/socket/socket

--------------------------------------------------------------------------------------------------


ng g c modules/user/components/chat-window --module=user

ng g r modules/user/resolver/conversations/conversations
ng g r modules/user/resolver/conversation-history/conversation-history

--------------------------------------------------------------------------------------------------

ng g s shared/services/field/field

--------------------------------------------------------------------------------------------------