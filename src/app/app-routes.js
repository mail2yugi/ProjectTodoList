"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'project', loadChildren: 'app/dashboard/project/project-info-module#ProjectInfoModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' } // Invalid routes redirect back to home
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
