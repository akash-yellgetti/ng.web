# Ngweb

test

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


#232F34 - Darkest
#344955 - 700
#4A6572 - 600
#F9AA33


ng serve -o --port 6001



ng g m modules/maintenance --routing=true


ng g m modules/market --routing=true
ng g c modules/market/components/index --module=market
ng g c modules/market/components/stock --module=market
ng g c modules/market/components/currency --module=market
ng g c modules/market/components/mutual-fund --module=market

ng g c modules/market/components/details --module=market


ng g s modules/market/services/money-control/money-control
ng g s modules/market/resolver/stock-resolver/stock-resolver



ng g m modules/tracker --routing=true
ng g c modules/tracker/vendor --module=tracker
ng g c modules/tracker/vehicle --module=tracker
ng g c modules/tracker/visitor --module=tracker


ng g m modules/accounts --routing=true
ng g c modules/accounts/voucher --module=accounts
ng g c modules/accounts/ledger --module=accounts


ng g m modules/service --routing=true
ng g c modules/service/meetings --module=service
ng g c modules/service/events --module=service
ng g c modules/service/complaints --module=service


ng g m modules/socio-safety --routing=true
ng g c modules/socio-safety/society --module=socio-safety
ng g c modules/socio-safety/flat --module=socio-safety
ng g c modules/socio-safety/members --module=socio-safety





ng g m modules/layout
ng generate module modules/layout/layout-routing --flat --module=layout
ng g c modules/layout/auth --module=layout
ng g c modules/layout/main --module=layout

ng g c modules/layout/components/home --module=layout
ng g c modules/layout/components/header --module=layout
ng g c modules/layout/components/dashboard --module=layout
ng g c modules/layout/components/calendar --module=layout
ng g c modules/layout/components/footer --module=layout


ng g c modules/layout/core/shared/filter --module=layout
ng g c modules/layout/core/shared/breadcrumb --module=layout

ng g s modules/layout/core/services/module


ng g c modules/layout/main/left-navigation --module=layout
ng g c modules/layout/main/view/card --module=layout
ng g c modules/layout/main/view/datatable --module=layout
ng g c modules/layout/main/view/paginator --module=layout
ng g c modules/layout/main/view/form --module=layout

ng generate @angular/material:navigation modules/layout/main/left-navigation --module=layout



ng g m modules/personal-finance --routing=true
ng g c modules/personal-financehome --module=personal-finance


ng g m modules/auth --routing=true
ng g c modules/auth/login --module=auth
ng g c modules/auth/components/registration --module=auth
ng g guard modules/auth/guards/auth/auth
ng g guard modules/auth/guards/route/route
ng g s modules/auth/services/auth/auth

ng g s modules/auth/services/auth/auth


ng g s modules/comm/socket/socket


ng g m modules/finance --routing=true
ng g c modules/finance/components/dashboard --module=finance
ng g c modules/finance/components/budget --module=finance

ng g c modules/finance/components/income --module=finance
ng g c modules/finance/components/expense --module=finance
ng g c modules/finance/components/expense-common --module=finance


ng g c modules/finance/components/house-hold --module=finance
ng g c modules/finance/components/transportation --module=finance
ng g c modules/finance/components/insurance --module=finance
ng g c modules/finance/components/food --module=finance
ng g c modules/finance/components/pets --module=finance
ng g c modules/finance/components/personal-care --module=finance
ng g c modules/finance/components/entertainment --module=finance
ng g c modules/finance/components/loan --module=finance
ng g c modules/finance/components/taxes --module=finance
ng g c modules/finance/components/saving --module=finance
ng g c modules/finance/components/investment --module=finance
ng g c modules/finance/components/gift --module=finance
ng g c modules/finance/components/donation --module=finance
ng g c modules/finance/components/legal --module=finance


ng g m shared
ng g c shared/components/dialog --module=shared

ng g s shared/services/field/field
ng g s shared/services/socket/socket
ng g s shared/services/loader/loader
ng g s shared/services/emi-calculator/emi-calculator


ng generate @angular/material:dashboard modules/layout/components/dashboard

aakash5792@gmail.com
AAbb12



ng g m modules/admin --routing=true
ng g c modules/admin/user --module=admin
ng g c modules/admin/role --module=admin
ng g c modules/admin/menu --module=admin
ng g c modules/admin/constant --module=admin


ng g m modules/user --routing=true
ng g c modules/user/components/personal-finance --module=user
ng g c modules/user/components/profile --module=user
ng g c modules/user/components/chat --module=user
ng g c modules/user/components/notification --module=user
ng g c modules/user/components/family --module=user
ng g c modules/user/components/habits --module=user



ng g m modules/communication --routing=true
ng g c modules/communication/notification --module=communication
ng g c modules/communication/sms --module=communication
ng g c modules/communication/email --module=communication
ng g c modules/communication/chat --module=communication
ng g c modules/communication/group-chat --module=communication
ng g c modules/communication/opinion-poll --module=communication
ng g c modules/communication/discussion-forum --module=communication


ng g s modules/communication/services/chat/chat 


<!-- https://stackblitz.com/edit/angular-dynamic-form-builder?file=app%2Fdynamic-form-builder%2Fatoms%2Ffile.ts -->
ng g m modules/form-builder --routing=true
ng g c modules/form-builder/form --module=form-builder
ng g c modules/form-builder/builder --module=form-builder
ng g m modules/form-builder/field
ng g c modules/form-builder/field/field-input --module=field
ng g c modules/form-builder/field/field-file --module=field
ng g c modules/form-builder/field/field-radio --module=field
ng g c modules/form-builder/field/field-checkbox --module=field
ng g c modules/form-builder/field/field-dropdown --module=field




<!-- Reference -->

<!-- ---------------- -->
https://www.youtube.com/watch?v=jGbP620NahE&t=1s
<!-- ---------------- -->
https://zoaibkhan.com/blog/create-a-responsive-card-grid-in-angular-using-flex-layout-part-1/
<!-- ---------------- -->
https://www.youtube.com/watch?v=iWYP3NtKQjs&list=RDCMUCKn7xwxBKZ_H1i6nilMsRQg&index=5
<!-- ---------------- -->
How to Build a Native App from Angular Projects with Capacitor
https://www.youtube.com/watch?v=V2Wn2JROUEo
<!-- ---------------- -->
Angular Material Mobile App with Capacitor
https://www.youtube.com/watch?v=UUiHB8VC_to
<!-- ---------------- -->
https://github.com/angular/flex-layout/tree/master/projects/apps/demo-app/src/app/layout
<!-- ---------------- -->
