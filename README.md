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

    ng g m modules/auth --routing=true
    ng g c modules/auth/components/login --module=auth
    ng g c modules/auth/components/registration --module=auth
    ng g c modules/auth/components/forgot-password --module=auth

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

    ng g c modules/user/components/chat-window --module=user
    ng g c modules/user/components/contact --module=user
    ng g c modules/user/components/setting --module=user

    ng g r modules/user/resolver/notifications/notifications
    ng g r modules/user/resolver/conversations/conversations
    ng g r modules/user/resolver/conversation-history/conversation-history

    ng g s modules/user/services/conversation/conversation
    ng g s modules/user/services/notification/notification
    ng g s modules/user/services/contact/contact



--------------------------------------------------------------------------------------------------


    ng g c shared/components/stepper --module=shared
    ng g c shared/components/spinner --module=shared
    ng g c shared/components/datatable --module=shared
    ng g c shared/components/field/field --module=shared
    ng g c shared/components/chart/chart --module=shared
    ng g c shared/components/chart-js/chart-js --module=shared
    ng g c shared/components/chart-google/chart-google --module=shared

    ng g c shared/components/dynamic-stepper
    ng g c shared/components/dynamic-field
    ng g c shared/components/checkbox-group
    ng g c shared/components/chips
    ng g c shared/components/chips-autocomplete
    ng g c shared/components/autocomplete
    ng g c shared/components/file-upload



    ng generate component checkbox-group


    dynamic-stepper.json.ts

    ng g i shared/interceptors/loader/loader
    ng g i shared/interceptors/jwt/jwt

    ng g s shared/services/socket/socket
    ng g s shared/services/socket/socket
    ng g s shared/services/validation/validation


    ng g s shared/services/loader/loader
    ng g s shared/services/common/common
    ng g s shared/services/field/field
    ng g s shared/services/api/categories/categories
    ng g s shared/services/calculator/calculator
    ng g s shared/services/chart/chart
    ng g s shared/services/chart-js/chart-js
    ng g s shared/services/chart-google/chart-google

    ng g s shared/services/numbertowordsservice/numbertowordsservice

    ng generate pipe shared/pipe/indianNumberFormat/indianNumberFormat
    ng generate pipe shared/pipe/numberToWords/numberToWords
    ng generate pipe shared/pipe/monthsToYears/monthsToYears
    ng generate pipe shared/pipe/keys/keys


--------------------------------------------------------------------------------------------------

    ng g m modules/school --routing=true
    ng g c modules/school/components/time-table --module=school
    ng g c modules/school/components/teacher --module=school

--------------------------------------------------------------------------------------------------

    ng g m modules/tradingview --routing=true
    ng g c modules/tradingview/components/alerts --module=tradingview
    ng g c modules/tradingview/components/trades --module=tradingview

--------------------------------------------------------------------------------------------------

    ng g m modules/calculator --routing=true
    ng g c modules/calculator/components/loan --module=calculator
    ng g c modules/calculator/components/investment --module=calculator
    ng g c modules/calculator/components/fire --module=calculator
    ng g c modules/calculator/components/goal --module=calculator
    ng g c modules/calculator/components/future --module=calculator

    ng g s modules/calculator/services/calculator

--------------------------------------------------------------------------------------------------

    customEmailValidator(control: AbstractControl): ValidationErrors | null {
        const emailPattern = /^[a-zA-Z]+ [a-zA-Z]+ <[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>$/;
        const value = control.value;
        if (!value || emailPattern.test(value)) {
            return null;
        }
        return { invalidEmail: true };
    }


    multipleEmailValidator(control: AbstractControl): ValidationErrors | null {
        const emailPattern = /^[a-zA-Z]+ [a-zA-Z]+ <[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>$/;
        const emails = control.value.split(';').map(email => email.trim());
        for (const email of emails) {
            if (!emailPattern.test(email)) {
                return { invalidEmail: true };
            }
        }
        return null;
    }
--------------------------------------------------------------------------------------------------

    <div class="file-upload">
        <label for="file-upload" class="upload-label">Upload File</label>
        <input type="file" id="file-upload" class="file-input" multiple>
        <div class="upload-area">
            <p>Drag and drop files here or click to upload</p>
        </div>
        <div class="file-info">
            <span class="file-name">No files chosen</span>
            <span class="file-size"></span>
        </div>
    </div>


    .file-upload {
        border: 2px dashed #007bff;
        padding: 20px;
        text-align: center;
        margin: 10px 0;
        }

    .upload-label {
        display: block;
        margin-bottom: 10px;
    }

    .upload-area {
        height: 100px;
        line-height: 100px;
        color: #007bff;
    }

    .file-info {
        margin-top: 10px;
    }


    body {
        background-color: #f8f9fa; /* Light gray background */
    }

    .table {
        border-radius: 0.25rem; /* Rounded corners for the table */
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    .table th {
        background-color: #007bff; /* Bootstrap primary color */
        color: white; /* Header text color */
    }

    .table tbody tr:hover {
        background-color: rgba(0, 123, 255, 0.1); /* Light hover effect */
    }

    .table tbody tr:nth-child(odd) {
        background-color: #f9f9f9; /* Light gray for odd rows */
    }



--------------------------------------------------------------------------------------------------
Lodash

    function pick(obj, keys) {
        const result = {};
        keys.forEach(key => {
            if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
            }
        });
        return result;
    }

    function omit(obj, keysToOmit) {
        const result = {};
        
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && !keysToOmit.includes(key)) {
                result[key] = obj[key];
            }
        }
        
        return result;
    }


--------------------------------------------------------------------------------------------------

    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f8f9fa;
    }

    .container {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .custom-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
    }

    .custom-table th, .custom-table td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #dee2e6;
    }

    .custom-table th {
        background-color: #007bff;
        color: white;
    }

    .custom-table tr:hover {
        background-color: #f1f1f1;
    }

    /* Media Queries for Responsiveness */
    @media (max-width: 600px) {
        .custom-table, .custom-table thead, .custom-table tbody, .custom-table th, .custom-table td, .custom-table tr {
            display: block;
        }

        .custom-table tr {
            margin-bottom: 15px;
        }

        .custom-table th {
            display: none;
        }

        .custom-table td {
            text-align: right;
            position: relative;
            padding-left: 50%;
        }

        .custom-table td::before {
            content: attr(data-label);
            position: absolute;
            left: 10px;
            width: 45%;
            padding-left: 10px;
            text-align: left;
            font-weight: bold;
        }
    }

--------------------------------------------------------------------------------------------------



    ng g m modules/finance --routing=true
    ng g c modules/finance/components/budget --module=finance
    ng g c modules/finance/components/planner --module=finance
    ng g c modules/finance/components/income-tax --module=finance
    ng g c modules/finance/components/transaction --module=finance

    ng g s modules/finance/services/api/budget/budget
    ng g s modules/finance/services/api/planner/planner
    ng g s modules/finance/services/api/transaction/transaction
    ng g s modules/finance/services/api/income-tax/income-tax

    ng g r modules/finance/resolver/budget/budget
    ng g r modules/finance/resolver/planner/planner 
    ng g r modules/finance/resolver/transaction/transaction 

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