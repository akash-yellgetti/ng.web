"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[891],{6891:(P,a,o)=>{o.r(a),o.d(a,{SchoolModule:()=>O});var g=o(9808),r=o(8555),t=o(5e3),i=o(9224);const d=[{path:"time-table",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-time-table"]],decls:4,vars:0,consts:[[1,"container-fluid","d-flex"],[1,"col-100"]],template:function(e,p){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"p"),t._uU(3,"blank works!"),t.qZA()()())},dependencies:[i.a8],styles:['@font-face{font-family:icomoon;src:url(icomoon.9451db72b1fe723e.eot?2a43iu);src:url(icomoon.9451db72b1fe723e.eot?2a43iu#iefix) format("embedded-opentype"),url(icomoon.f9c29c0597f823f7.ttf?2a43iu) format("truetype"),url(icomoon.917b1297922ea236.woff?2a43iu) format("woff"),url(icomoon.17adc82b6fbdea03.svg?2a43iu#icomoon) format("svg");font-weight:400;font-style:normal;font-display:block}[class^=icon-][_ngcontent-%COMP%], [class*=" icon-"][_ngcontent-%COMP%]{font-family:icomoon!important;speak:never;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-play-store[_ngcontent-%COMP%]:before{content:"\\e900"}.icon-apple-icon[_ngcontent-%COMP%]:before{content:"\\e901"}.icon-eye[_ngcontent-%COMP%]:before{content:"\\e902"}.icon-eye-close[_ngcontent-%COMP%]:before{content:"\\e903"}.d-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.d-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap}.d-row[_ngcontent-%COMP%]{flex-direction:row}.d-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.d-column[_ngcontent-%COMP%]{flex-direction:column}.d-grow[_ngcontent-%COMP%]{flex-grow:1}.d-gap-15[_ngcontent-%COMP%]{gap:15px}.align-item-center[_ngcontent-%COMP%]{align-items:center}.align-item-right[_ngcontent-%COMP%]{align-items:flex-end}.justify-content-center[_ngcontent-%COMP%]{justify-content:center}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end}.flex-auto[_ngcontent-%COMP%]{flex:1 1 auto}.row[_ngcontent-%COMP%]{padding:15px}.col-70[_ngcontent-%COMP%]{flex:1 1 69%}.col-50[_ngcontent-%COMP%]{width:50%}.col-25[_ngcontent-%COMP%]{flex:1 1 24%}.padding-zero[_ngcontent-%COMP%]{padding:0}.w-10[_ngcontent-%COMP%]{width:10%}.w-20[_ngcontent-%COMP%]{width:20%}.w-25[_ngcontent-%COMP%]{width:25%}.w-30[_ngcontent-%COMP%]{width:30%}.w-50[_ngcontent-%COMP%]{width:50%}.w-60[_ngcontent-%COMP%]{width:60%}.w-70[_ngcontent-%COMP%]{width:70%}.w-80[_ngcontent-%COMP%]{width:80%}.w-90[_ngcontent-%COMP%]{width:90%}.w-100[_ngcontent-%COMP%]{width:100%}.h-100[_ngcontent-%COMP%]{height:100px}.h-150[_ngcontent-%COMP%]{height:150px}.h-200[_ngcontent-%COMP%]{height:200px}.h-250[_ngcontent-%COMP%]{height:250px}.h-300[_ngcontent-%COMP%]{height:300px}.h-350[_ngcontent-%COMP%]{height:350px}.h-400[_ngcontent-%COMP%]{height:400px}.h-450[_ngcontent-%COMP%]{height:450px}body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important;background-color:#f1f5ff}*[_ngcontent-%COMP%]{box-sizing:border-box}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%], .mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .default-font[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important}@font-face{font-family:icon-lib;src:url(icomoon.2917ef5f56a174cc.eot?m5ubuu);src:url(icomoon.2917ef5f56a174cc.eot?m5ubuu#iefix) format("embedded-opentype"),url(icomoon.34e4ae6252418be0.ttf?m5ubuu) format("truetype"),url(icomoon.00e72c1284699dd1.woff?m5ubuu) format("woff"),url(icomoon.7ab78a4f95163f28.svg?m5ubuu#icomoon) format("svg");font-weight:400;font-style:normal;font-display:block}.icon-font[_ngcontent-%COMP%]{font-family:icon-lib!important;speak:never;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-business-01[_ngcontent-%COMP%]:before{content:"\\e900"}.icon-child-education-01[_ngcontent-%COMP%]:before{content:"\\e901"}.icon-education-01[_ngcontent-%COMP%]:before{content:"\\e902"}.icon-emergency-fund-01[_ngcontent-%COMP%]:before{content:"\\e903"}.icon-epf-fund-01[_ngcontent-%COMP%]:before{content:"\\e904"}.icon-fd-01[_ngcontent-%COMP%]:before{content:"\\e905"}.icon-futures-01[_ngcontent-%COMP%]:before{content:"\\e906"}.icon-gold-01[_ngcontent-%COMP%]:before{content:"\\e907"}.icon-gold-02-01[_ngcontent-%COMP%]:before{content:"\\e908"}.icon-high-education-01[_ngcontent-%COMP%]:before{content:"\\e909"}.icon-home-01[_ngcontent-%COMP%]:before{content:"\\e90a"}.icon-marriage-01[_ngcontent-%COMP%]:before{content:"\\e90b"}.icon-mf-01[_ngcontent-%COMP%]:before{content:"\\e90c"}.icon-mortgage-loan-01[_ngcontent-%COMP%]:before{content:"\\e90d"}.icon-mutual-fund-01[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-new-house-01[_ngcontent-%COMP%]:before{content:"\\e90f"}.icon-nps-01[_ngcontent-%COMP%]:before{content:"\\e910"}.icon-personal-01[_ngcontent-%COMP%]:before{content:"\\e911"}.icon-ppf-01[_ngcontent-%COMP%]:before{content:"\\e912"}.icon-property-01[_ngcontent-%COMP%]:before{content:"\\e913"}.icon-rd-01[_ngcontent-%COMP%]:before{content:"\\e914"}.icon-retirement-01[_ngcontent-%COMP%]:before{content:"\\e915"}.icon-stocks-01[_ngcontent-%COMP%]:before{content:"\\e916"}.icon-stocks-02-01[_ngcontent-%COMP%]:before{content:"\\e917"}.icon-trading-01[_ngcontent-%COMP%]:before{content:"\\e918"}strong[_ngcontent-%COMP%], .text-bold[_ngcontent-%COMP%]{font-weight:700}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#364363;letter-spacing:-.5px;font-family:Open Sans,sans-serif!important}h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{color:#002b5c}.btn.btn-primary[_ngcontent-%COMP%]{background-color:#002b5c;border-color:transparent}.btn.btn-outline-primary[_ngcontent-%COMP%]{border-color:#002b5c;color:#002b5c}.btn.active[_ngcontent-%COMP%]{color:#002b5c!important}.btn.btn-form-style[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #e0e1e3;color:#949494;text-align:left}.btn.btn-form-style[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right}label[_ngcontent-%COMP%]{color:#757786}.form-control[_ngcontent-%COMP%]{border-color:#e0e1e3}.form-control[_ngcontent-%COMP%]::placeholder{color:#949494}.form-control.form-control-fill[_ngcontent-%COMP%]{background-color:#f4f5f9;border-radius:0}.input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]{z-index:1}.input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{background-color:#fff;border-color:#e0e1e3;border-left:none;color:#949494}.input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]{margin-left:-2px}.input-group.input-group-lg[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .input-group.input-group-lg[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{font-size:24px;line-height:1}.input-group.input-group-fill[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .input-group.input-group-fill[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .input-group.input-group-fill[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background-color:#f4f5f9;border-radius:0}.form-action[_ngcontent-%COMP%]{align-items:center;margin-top:15px}.form-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:120px}.mat-form-field.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{padding:0;background-color:transparent}.mat-form-field.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{background-color:#f4f5f9;border-radius:0}.w-40[_ngcontent-%COMP%]{width:40%}.d-flex[_ngcontent-%COMP%]{display:flex}.margin-left[_ngcontent-%COMP%]{margin-left:auto}.width-100[_ngcontent-%COMP%]{width:100%}.align-center[_ngcontent-%COMP%]{justify-content:center}.align-items[_ngcontent-%COMP%]{align-items:center}.space-between[_ngcontent-%COMP%]{justify-content:space-between}.row[_ngcontent-%COMP%]   .col.col-space-lg[_ngcontent-%COMP%]{padding:90px}section[_ngcontent-%COMP%]{position:relative}section[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%]{position:relative;z-index:1}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]{z-index:2}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{letter-spacing:-1px}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#364363;font-size:20px;line-height:1.5}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:20px;line-height:1;border:1px solid #e0e1e3;color:#364363;border-radius:50%;padding:15px}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%]{margin-left:15px}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#364363;font-size:1.5rem;font-weight:600}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}@media (max-width: 767.98px){section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{flex-direction:row}}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:150px}@media (max-width: 767.98px){section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:auto}}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;display:block;margin:0}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:150px}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width: 767.98px){section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{padding:7px;font-size:20px;line-height:1}}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] + .nav-item[_ngcontent-%COMP%]{margin-left:15px}@media (max-width: 767.98px){section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] + .nav-item[_ngcontent-%COMP%]{margin-left:0}}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.nav-icon[_ngcontent-%COMP%]{margin-left:0;width:auto}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.nav-icon[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:7px;color:#838691}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.nav-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;line-height:1}section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.spacer[_ngcontent-%COMP%]{width:auto}@media (max-width: 767.98px){section[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.spacer[_ngcontent-%COMP%]{width:30px}}section[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%] + .contain[_ngcontent-%COMP%]{margin-top:15px}section.inverse[_ngcontent-%COMP%]{color:#fff}section.inverse[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}section.inverse[_ngcontent-%COMP%]   .contain.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}section.space-lg[_ngcontent-%COMP%]{padding:90px}@media (max-width: 1199.98px){section.space-lg[_ngcontent-%COMP%]{padding:15px}}section[_ngcontent-%COMP%] + section[_ngcontent-%COMP%]{margin-top:60px}.container-main[_ngcontent-%COMP%]{padding:15px}.container-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-right:-10px;margin-left:-10px}.container-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=col][_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:transparent;border-bottom:transparent;margin-bottom:0;padding:20px 15px 0;display:flex;align-items:center;justify-content:flex-start}.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:0}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:15px}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding-top:20px}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:80px}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%]{margin-left:15px}.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:0 15px 20px}.card.card-table-grid[_ngcontent-%COMP%]{margin-bottom:15px}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding-bottom:0}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-avatar[_ngcontent-%COMP%]{width:64px;height:64px;overflow:hidden;border-radius:50%;margin-right:15px}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:18px;line-height:1.3;font-weight:600;margin-bottom:7px;color:#3a405b}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{font-size:16px;line-height:1.3;color:#002b5c;margin-bottom:0}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]{position:absolute;right:0;top:20px}.card.card-table-grid[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:7px;font-size:18px}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]{width:70%;list-style:none;margin:0;padding:0}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;color:#838691;display:flex;align-items:center;padding:0;border:none;background-color:transparent}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:7px}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;margin-right:7px}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]{flex-direction:column;width:30%;padding-top:0}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:0;display:block;width:100%}.card.card-table-grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%]{margin-top:15px}.card.card-modal[_ngcontent-%COMP%]{border:none}.card.card-modal[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding:15px 0 0}.card.card-modal[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:20px;line-height:1.5;font-weight:600;color:#3a405b;border-left:5px solid #002b5c;padding:0 15px}.card.card-modal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:15px;max-height:60vh;overflow-y:auto}.card.card-modal[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{background-color:transparent;border:none;text-align:right;padding:0 15px 15px}.card.card-modal[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:120px}.card.card-modal[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%]{margin-left:15px}.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{border:1px solid #e0e1e3!important}.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding-bottom:20px}.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%]{padding:0;margin-left:auto;font-size:20px;line-height:1}.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn-toggle.collapsed[_ngcontent-%COMP%]{display:block;transform:rotate(-90deg)}.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding-top:0}.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] + .card[_ngcontent-%COMP%]{margin-top:15px}.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%] > .btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus{box-shadow:#4a657208}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{width:30px;height:30px;font-size:20px;font-weight:400;background-color:#002b5c;color:#fff;opacity:1!important;position:absolute;top:-15px;right:-14px;z-index:9;transform:rotate(45deg)}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover, .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus{opacity:1}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;transform:rotate(-45deg)}@media (max-width: 767.98px){.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{display:none}}.bottom-sheet.fade[_ngcontent-%COMP%]{transition:none!important}.bottom-sheet[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{display:flex;align-items:flex-end;height:100vh;margin:0 auto;transition:none!important}.bg-primary[_ngcontent-%COMP%]{background-color:#002b5c!important}.bg-white[_ngcontent-%COMP%]{background-color:#fff!important}.text-primary[_ngcontent-%COMP%]{color:#002b5c!important}.text-secondary[_ngcontent-%COMP%]{color:#364363!important}.text-md[_ngcontent-%COMP%]{font-size:18px}.text-lg[_ngcontent-%COMP%]{font-size:20px}.text-semibold[_ngcontent-%COMP%]{font-weight:600}@media (max-width: 767px){.pt-lg-xs[_ngcontent-%COMP%]{padding-top:60px!important}}.table-container[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{background-color:#002b5c;color:#fff}.table-container[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#00000008}.table-container[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]{border-bottom-color:#0000000d}.auth-bg-img[_ngcontent-%COMP%]{background:url(grey-building-bg.13219760c991cb4c.svg) center bottom no-repeat;background-size:cover;opacity:.8;width:100%;height:35%;position:absolute;bottom:0;right:0}.auth-bg-img.inverse[_ngcontent-%COMP%]{background:url(blue-building.688bb9818d3a72b9.svg) center bottom no-repeat;background-size:cover;opacity:.6}  .form-group .mat-radio-button.mat-accent .mat-radio-inner-circle,   .form-group .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .form-group .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .form-group .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#002b5c}  .form-group .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#002b5c}  .form-group .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,   .form-group .mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#002b5c}  .form-group .mat-radio-label{margin-right:10px}  .form-group input{line-height:1.2em}  .form-group .mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}  .form-group .mat-form-field-subscript-wrapper{position:relative}  .form-group .mat-form-field{display:block}  .form-group .mat-error{font-size:13px}  .form-group .mat-form-field-appearance-outline .mat-form-field-infix{border-top:3px solid transparent}  .form-group.datepicker .mat-form-field-infix{padding:3px 0;display:inline-flex}  .form-group.datepicker .mat-icon-button{height:38px;width:38px;line-height:38px}.common-btn[_ngcontent-%COMP%]{padding:12px 25px;border-radius:8px;color:#fff;cursor:pointer}.common-btn.btn-fill[_ngcontent-%COMP%]{background:#002b5c;border:1px solid #002b5c}.common-btn.btn-fill[_ngcontent-%COMP%]:hover, .common-btn.btn-fill[_ngcontent-%COMP%]:focus{background:#0f248d}.common-btn.btn-text[_ngcontent-%COMP%]{padding:0;border-radius:0;color:#002b5c;border:none}.common-btn.btn-white[_ngcontent-%COMP%]{background:#ffffff;border:1px solid #002b5c;color:#000}.container-fluid[_ngcontent-%COMP%]{padding:75px 15px 60px;min-height:100vh;flex-direction:row}@media (max-width: 767px){.container-fluid[_ngcontent-%COMP%]{flex-wrap:wrap}}']}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(d),r.Bz]}),n})();var M=o(7427);let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,M.m,C]}),n})()}}]);