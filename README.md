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

--------------------------------------------------------------------------------------------------


ng g m modules/main --routing=true
ng g c modules/main/components/layout --module=main
ng g c modules/main/components/dashboard --module=main
ng g c modules/main/components/home --module=main
ng g c modules/main/components/setting --module=main
ng g c modules/main/components/help --module=main
ng g c modules/main/components/blank --module=main

ng g s modules/main/core/services/module



--------------------------------------------------------------------------------------------------

ng g s shared/services/socket/socket
ng g s shared/services/socket/socket

--------------------------------------------------------------------------------------------------


ng g c modules/user/components/chat-window --module=user
ng g c modules/user/components/contact --module=user

ng g r modules/user/resolver/notifications/notifications
ng g r modules/user/resolver/conversations/conversations
ng g r modules/user/resolver/conversation-history/conversation-history

ng g s modules/user/services/conversation/conversation
ng g s modules/user/services/notification/notification
ng g s modules/user/services/contact/contact



--------------------------------------------------------------------------------------------------

ng g s shared/services/common/common
ng g s shared/services/field/field
ng g s shared/services/calculator/calculator
ng g s shared/services/chart/chart
ng g s shared/services/chart-js/chart-js
ng g s shared/services/chart-google/chart-google

ng g s shared/services/numbertowordsservice/numbertowordsservice

ng generate pipe shared/pipe/indianNumberFormat/indianNumberFormat
ng generate pipe shared/pipe/numberToWords/numberToWords
ng generate pipe shared/pipe/monthsToYears/monthsToYears


--------------------------------------------------------------------------------------------------

ng g m modules/school --routing=true
ng g c modules/school/components/time-table --module=school
ng g c modules/school/components/teacher --module=school

--------------------------------------------------------------------------------------------------

ng g m modules/tradingview --routing=true
ng g c modules/tradingview/components/alerts --module=tradingview
ng g c modules/tradingview/components/trades --module=tradingview
--------------------------------------------------------------------------------------------------
ng g c shared/components/datatable --module=shared
ng g c shared/components/chart/chart --module=shared
ng g c shared/components/chart-js/chart-js --module=shared
ng g c shared/components/chart-google/chart-google --module=shared
--------------------------------------------------------------------------------------------------


ng g m modules/calculator --routing=true
ng g c modules/calculator/components/loan --module=calculator
ng g c modules/calculator/components/investment --module=calculator
ng g c modules/calculator/components/fire --module=calculator
ng g c modules/calculator/components/goal --module=calculator
ng g c modules/calculator/components/future --module=calculator

ng g s modules/calculator/services/calculator
--------------------------------------------------------------------------------------------------



ng g m modules/finance --routing=true
ng g c modules/finance/components/budget --module=finance
ng g c modules/finance/components/planner --module=finance
ng g c modules/finance/components/income-tax --module=finance


ng g s modules/finance/services/api/budget/budget
ng g s modules/finance/services/api/planner/planner

ng g r modules/finance/resolver/budget/budget
ng g r modules/finance/resolver/planner/planner 

--------------------------------------------------------------------------------------------------
ng g m modules/personal --routing=true
ng g c modules/personal/components/budget --module=personal
ng g c modules/personal/components/routine --module=personal
ng g c modules/personal/components/goal --module=personal
ng g c modules/personal/components/fire --module=personal
ng g c modules/personal/components/transaction --module=personal
ng g c modules/personal/components/investment --module=personal
ng g c modules/personal/components/financial --module=personal
ng g c modules/personal/components/routine-scheduler --module=personal

ng generate component schedule-calculator



ng g c modules/personal/components/goal --module=personal


--------------------------------------------------------------------------------------------------